import { useEffect, useRef } from 'react';

const Constellation = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;
    const connectionDistance = 150;
    const mouseConnectionDistance = 200;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        // Outer glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(229, 231, 235, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        const outerGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
        outerGradient.addColorStop(0, 'rgba(229, 231, 235, 0.3)');
        outerGradient.addColorStop(0.5, 'rgba(209, 213, 219, 0.15)');
        outerGradient.addColorStop(1, 'rgba(156, 163, 175, 0)');
        ctx.fillStyle = outerGradient;
        ctx.fill();
        
        // Middle glow layer
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(229, 231, 235, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 1.5, 0, Math.PI * 2);
        const middleGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 1.5);
        middleGradient.addColorStop(0, 'rgba(229, 231, 235, 0.5)');
        middleGradient.addColorStop(0.7, 'rgba(209, 213, 219, 0.25)');
        middleGradient.addColorStop(1, 'rgba(156, 163, 175, 0)');
        ctx.fillStyle = middleGradient;
        ctx.fill();
        
        // Inner core with gradient
        ctx.shadowBlur = 3;
        ctx.shadowColor = 'rgba(229, 231, 235, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const coreGradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        coreGradient.addColorStop(0.5, 'rgba(229, 231, 235, 0.7)');
        coreGradient.addColorStop(1, 'rgba(209, 213, 219, 0.4)');
        ctx.fillStyle = coreGradient;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Off-white/grayish gradient
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(229, 231, 235, ${opacity * 0.3})`);
            gradient.addColorStop(0.5, `rgba(209, 213, 219, ${opacity * 0.25})`);
            gradient.addColorStop(1, `rgba(156, 163, 175, ${opacity * 0.2})`);
            ctx.strokeStyle = gradient;
            ctx.shadowBlur = 3;
            ctx.shadowColor = 'rgba(229, 231, 235, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw connections to mouse
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      particles.forEach(particle => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseConnectionDistance) {
          const opacity = 1 - distance / mouseConnectionDistance;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseX, mouseY);
          
          // Off-white/grayish gradient to mouse
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            mouseX, mouseY
          );
          gradient.addColorStop(0, `rgba(229, 231, 235, ${opacity * 0.4})`);
          gradient.addColorStop(0.5, `rgba(209, 213, 219, ${opacity * 0.35})`);
          gradient.addColorStop(1, `rgba(156, 163, 175, ${opacity * 0.3})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 5;
          ctx.shadowColor = 'rgba(229, 231, 235, 0.4)';
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      // Draw mouse cursor dot with glow (off-white/grayish)
      const cursorGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 6);
      cursorGradient.addColorStop(0, 'rgba(229, 231, 235, 0.8)');
      cursorGradient.addColorStop(0.5, 'rgba(209, 213, 219, 0.6)');
      cursorGradient.addColorStop(1, 'rgba(156, 163, 175, 0.3)');
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
      ctx.fillStyle = cursorGradient;
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(229, 231, 235, 0.5)';
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default Constellation;


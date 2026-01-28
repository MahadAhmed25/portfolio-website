export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-small text-muted-foreground">
          © {new Date().getFullYear()} Mahad Ahmed
        </p>
        <p className="text-small text-muted-foreground">
          McMaster University · Software Engineering
        </p>
      </div>
    </footer>
  );
};

$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fi fi-bs-cross");
        $('header').toggleClass("toggle");
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass("fi fi-bs-cross");
        $('header').removeClass("toggle");
    });

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });
});
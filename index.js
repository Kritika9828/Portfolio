$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
});

    $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
});
// Scroll to top
    $('nav a[href*="#"]').on('click', function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
     }, "2000");
});

$('#up').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    },"1000");
});

//Skill bar animate on scroll





//End skill bar animate 


AOS.init({
    easing:'ease',
    duration: 1800,
    once: true
});

});
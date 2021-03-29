$(function() {
    var navbar = $('.navbar');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
            $(".navbar .navbar-brand img").attr("src", 'img/Titre_Sohane.png');
        } else {
            navbar.addClass('navbar-scroll');
            $(".navbar .navbar-brand img").attr("src", 'img/Blanc.png');
        }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('#faq').fadeIn();
        } else {
            $('#faq').fadeIn();
        }
    });
    $('#faq').click(function(){
        $("html, body").animate({ scrollTop: ($('#helpsupport').offset().top) }, 600);
        return false;
    });
});

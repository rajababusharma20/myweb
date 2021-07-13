$(document).ready(function () {

    $('#menu').click(function (e) { 
        e.preventDefault();
        $('#nav').toggleClass('active');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#back-to-top').fadeIn();
        }else{
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
    });
    
});
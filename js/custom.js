$(document).ready(function(){
    // Register button
    $(window).on("scroll",function(e){
        let scrollDistance = $(window).scrollTop();
        let register = $('#register');
        if(scrollDistance < 720){
            register.css('opacity','0');
        }else{
            register.css('opacity','1');
        }
    });

    // wow plugin initialize
    new WOW().init();
    
})
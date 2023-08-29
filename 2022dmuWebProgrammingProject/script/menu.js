$(document).ready(function(){
    $('.mainNav').hover(function(){
        $(this).find('+ .subNav').stop().slideDown('fast');
        
        $(this).parent().mouseleave(function(){
            $(this).find('.subNav').stop().slideUp('fast');
        });
    });
});

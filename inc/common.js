
var before = 0;
let jwScroll;
let current;


//화면 위치와 크기에 따라 스타일을 변경하는 스크립트 수정하는 함수!!
function scrollCheck() {
    if(current >= jwScroll) {
        $('#navBox').addClass('navActive');
        if( $(window).width() > 750 ) {
            $('.main>a').addClass('navActive');
            $('.main>a').css('color','#555');
        }
        $('.logoBox img').attr('src','images/logo2.png');
        $('#navBox').css('background','#fff');
        $('.viewcolor').css('background', '#333');
    }
    else {
        $('#navBox').removeClass('navActive');
        $('#navBox').css('background','transparent');
        if( $(window).width() > 750 ) {
            $('.main>a').removeClass('navActive');
            $('.main>a').css('color','#fff');
        }
        else
            $('.main>a').css('color','#555');
            
        $('.logoBox img').attr('src','images/logo.png');
        $('.viewcolor').css('background', '#fff');
    }    
}    //end scrollCheck()




$(window).scroll(function(){
    jwScroll = $('#sec1').offset().top;    
    current = $(this).scrollTop();
    

    //화면 위치와 크기에 따라 스타일을 변경하는 스크립트 수정!!
    scrollCheck();

});    //end $(window).scroll




$(function(){
    $('#view input').click(function(){
        $('#navi').toggleClass('viewActive');
    });

    $('.main, #subBack').mouseenter(function(){
        if( $(window).width() > 750 ) {        
            $(this).children('.subMenu').css('display','flex');
            $('#subBack').stop().slideDown();
            $('.main>a').css('color','rgb(105, 105, 105)');
        }
        else {
            $(this).children('.subMenu').stop().slideDown();   //모바일에서는 아코디언 메뉴 방식으로!!
        }
        $('#navBox').css('background','#fff');
        $('.logoBox img').attr('src','images/logo2.png');
        // $('#navBox').css('border-bottom', '1px solid rgba(153, 153, 153,.5)');
    });



    $('.main, #subBack').mouseleave(function(){
        if( $(window).width() > 750 ) {
            $('#subBack').stop().slideUp();
            $(this).children('.subMenu, #subBack').css('display','none');
        }
        else
            $(this).children('.subMenu').stop().slideUp();   //모바일에서는 아코디언 메뉴 방식으로!!
        

        //화면 위치와 크기에 따라 스타일을 변경하는 스크립트 수정!!
        scrollCheck();

    });

});   //end $(function()




$(window).resize(function(){
    if($(this).width()>700) {
        $('#menu').removeAttr('style');

        $('.subMenu').css('marginTop','0'); 
        $('.main').css('color','rgb(105,105,105')
        $('.main > a').removeAttr('style');     //화면 리사이즈할 때 메인 링크 원래대로!!
    }
});
var slideNo = 0;

$(window).scroll(function(){
        
    var y = $(this).scrollTop();
    
    if(y>0)
        $('#top').stop().animate({'bottom':'20px'},300);
    else
        $('#top').stop().animate({'bottom':'-60px'},300);
});



// 메인 슬라이드 이동
function slide(){
    slideNo++;
    
    if(slideNo > 4) slideNo=0;
    
        $('.slide').fadeOut(1000);    
        $('.slide').eq(slideNo).fadeIn(1000); 
    
        $('.circle').css('opacity','.55');
        $('.circle').eq(slideNo).css('opacity','1');
}



        function headerPlaySlide() {
            headerLoop = setInterval('slide()',4000);
        }
        
        function headerStopSlide() {
            clearInterval(headerLoop);
        }





//섹션1
var loop;
var slideWidth;


//슬라이드 폭 계산
function init() {

    slideWidth = $('#listBox1').width() / 3;    //슬라이드를 3개 표시

    //900px 이하에서는 슬라이드를 2개 표시
    if ($(window).width() < 900)
        slideWidth = $('#listBox1').width() / 2;

    //400px 이하에서는 슬라이드를 1개 표시
    if ($(window).width() < 400)
        slideWidth = $('#listBox1').width();

    $('.slide1').width(slideWidth);    //슬라이폭 변경
    $('#slideBox1').width(slideWidth * 6);    //슬라이드박스 폭 계산
}

//페이지가 열리거나, 화면 폭을 조절할 때 슬라이드 폭 계산 실행
$(document).ready(init);
$(window).resize(init);





//다음버튼용
function moveLeft() {
    $('#slideBox1').stop().animate({ 'margin-left': -slideWidth }, 500, function () {
        $('.slide1:first').appendTo('#slideBox1');
        $('#slideBox1').css('margin-left', 0);
    });
}   //end moveLeft()


//이전버튼용
function moveRight() {
    $('.slide1:last').prependTo('#slideBox1');
    $('#slideBox1').css('margin-left', -slideWidth);
    $('#slideBox1').stop().animate({ 'margin-left': 0 }, 500);
}   //end moveRight


function playSlide() {
    loop = setInterval('moveLeft()', 3000);
}

function stopSlide() {
    clearInterval(loop);
}





//sec3

$(function () {
    

    $(function() {  
        $("#slideBox2").simplyScroll();
    });

    playSlide();
    headerPlaySlide();

    //헤더서클버튼 
    $('.circle').click(function(){
        var no = $(this).index();
        
        headerStopSlide();
        slideNo = no-1;
        slide();
        headerPlaySlide();
        
        $('.circle').css('opacity','.55');
        $('.circle').eq(no).css('opacity','1');
    });
    


    $('.slideLeft').click(function () {
        if (!$('#slideBox1').is(':animated'))
            moveRight();
    });


    $('.slideRight').click(function () {
        if (!$('#slideBox1').is(':animated'))
            moveLeft();
    });


    $('#listBox1').mouseenter(function () { stopSlide(); });

    $('#listBox1').mouseleave(function () { playSlide(); });

    $('weddingBox a').mouseenter(function(){
        $('.meetingBg').removeClass(on);
        $('.weddingBg').addClass(on);
    });

    $('meetingBox a').mouseenter(function(){
        $('.weddingBg').removeClass(on);
        $('.meetingBg').addClass(on)
    });

    //스크롤탑
    $('#top').click(function(){
        $('body,html').stop().animate({'scrollTop':0},500);
    });


});    //$(function)
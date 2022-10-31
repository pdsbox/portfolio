//슬라이드
var slideIndex = 0;
function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    slideIndex++;
    var isIdx = slideIndex % 3;
    $(".backimg>li").eq(isIdx).addClass("topImg");
}

var slideCall = setInterval("slideAuto()", 3000);

$(".headerWrap").hover(function(){
    clearInterval(slideCall);
    },function(){
    slideCall = setInterval("slideAuto()", 3000);
});


// GNB 메뉴
$(document).ready(function(){
    gnbevent();
});
$(window).resize(function(){
    gnbevent();
});


//GNB이벤트(pc=호버, mob=클릭)
let gnbevent = function(){

    if(window.matchMedia('(max-width:1024px)').matches){
    //모바일일때 클릭이벤트로 변경

        $("#gnb>li").off("hover");      //호버이벤트 무효화
        $("#gnb>li").removeClass("open");   //초기화
        $("#gnb>li").addClass("clk");       //초기화(클릭이벤트 활성화)
        $("#gnb>li").removeClass("hov");    //초기화(호버이벤트 비활성화)

        $("#gnb>li").click(function(){
            if($(this).hasClass("clk")){
                    
                if($(this).hasClass("open") == true){
                    $(this).children(".sub").stop().fadeOut(100);
                    $(this).removeClass("open");
                }else if($(this).hasClass("open") == false){
                    $(this).children(".sub").stop().fadeIn(100);
                    $(this).addClass("open");
                }

            }else{}
        })
    }else if(window.matchMedia('(min-width:1025px)').matches){
    //PC화면일때 호버이벤트로 변경

        $("#gnb>li").off("click");
        $("#gnb>li").children(".sub").fadeOut(1);
        $("#gnb>li").addClass("hov");
        $("#gnb>li").removeClass("clk");

        $("#gnb>li").hover(function(){
            if($(this).hasClass("hov")){
                $(this).children(".sub").stop().fadeIn(200);
                }else{}
                    
        },function(){
            if($(this).hasClass("hov")){ 
            $(this).children(".sub").stop().fadeOut(200);
            }else{}
        })
    }
}


// 햄버거메뉴 토글버튼
$(function(){
    $("#menu").click(function(){
        $(this).toggleClass("aniMenu");
        $("#gnb").fadeToggle(100);
        if($(this).hasClass("aniMenu") == true){
            $(this).children("span").css("opacity","0");
        }else{
            $(this).children("span").css("opacity","1");
        }
    });
});


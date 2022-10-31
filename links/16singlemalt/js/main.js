/*슬라이드*/
    /*앞으로가기버튼*/
    function slide_next(){
        $("#img_slide>ul>li:first-of-type").animate({left:'100%'},200,function(){
            $("#img_slide>ul>li:nth-of-type(2)").animate({left:'0'},200);
            $("#img_slide>ul>li:last-of-type").css('left','-100%');
            $("#img_slide>ul").append($(this));
            carousel();
        })
    }

    /*뒤로가기버튼*/
    function slide_prev(){
        $("#img_slide>ul>li:first-of-type").animate({left:'-100%'},200,function(){
            $("#img_slide>ul>li:last-of-type").animate({left:'0%'}
        ,200)
        $("#img_slide>ul>li:nth-of-type(2)").css({left:'100%'}
        ,200)
            $("#img_slide>ul").prepend($("#img_slide>ul>li:last-of-type"));
            carousel();
        })
    }
    
    /*앞/뒤 버튼 클릭으로연결*/
    $(function(){
        $("#after_btn").click(function(){
            slide_next();
        });
    })
    $(function(){
        $("#before_btn").click(function(){
            slide_prev();
        });
    });


    /*자동슬라이드*/
let isPause = false;    //스위치

let slideAuto = setInterval(function(){
    slide_animate();
},3000);
        
function slide_animate(){
    $("#img_slide>ul>li:first-of-type").animate({left:'100%'},200,
        function(){
            $("#img_slide>ul>li:nth-of-type(2)").animate({left:'0'},200);
            $("#img_slide>ul>li:last-of-type").css('left','-100%');
            $("#img_slide>ul").append($(this));
            carousel()
        }
    )
};
/*호버시 멈춤/재실행*/
$(function(){
    $("#visual").hover(function(){
        isPause = true;
        slide();
    },function(){
        isPause = false;
        slide();
    })
});

$("#img_slide").on("mouseover",function(){
    clearInterval(slideAuto);
})

function slide(){
    if(isPause == true){
        clearInterval(slideAuto);
    }else if(isPause == false){
        slideAuto = setInterval(function(){
            slide_animate();
        },3000);
    }
}


/*캐로셀위치*/
function carousel(){
    let cnt = $("#img_slide>ul>li").length;
    for(i = 1; i <= cnt; i++){
        $("#carousel_btn>span:nth-of-type("+i+")").removeClass("crs_btn_selected").addClass("span");
    }
    let center = $("#img_slide>ul>li:first-of-type");

    if(center.hasClass("vbnr1") == true){
        $("#carousel_btn>span:first-of-type").addClass("crs_btn_selected").removeClass("span");

    }else if(center.hasClass("vbnr3") == true){
        $("#carousel_btn>span:last-of-type").addClass("crs_btn_selected").removeClass("span");

    }else{
        $("#carousel_btn>span:nth-of-type(2)").addClass("crs_btn_selected").removeClass("span");
    }
};


    /* 캐로셀 버튼이벤트 */
/*
$(function(){
    $("#carousel_btn>span").click(function(){
        let tg = ($(this).index()+1) % 3;   
        let target = function(){
            if(tg == 0){
                return 3;
            }else{
                return tg;
            }
        };
        let targetimg = $(".vbnr"+target());
        let now_selected = $(".crs_btn_selected").index()+1;
        let now_img = $("#img_slide>ul>li:first-of-type");
*/

/*애니메이션*/
/*
        if(now_selected > target()){    //역방향 애니메이션
            targetimg.css("left","100%");
            now_img.animate({left:'-100%'},200,function(){
                targetimg.animate({left:'0'},200);
                $("#img_slide>ul").prepend(targetimg);
                carousel();
            });
        }else if(now_selected < target()){  //정방향 애니메이션
            targetimg.css("left","-100%");
            now_img.animate({left:'100%'},200,function(){
                targetimg.animate({left:"0"},200);
                $("#img_slide>ul").prepend(targetimg);
                carousel();

            })
        }
        img_align();
        
        
        })
    });
*/

/*이미지 리스트 정렬*/
/*
function img_align(){
    if( $("#img_slide>ul>li:first-of-type").hasClass("vbnr1") ){
            $("#img_slide>ul").append($(".vnbr2"));
            $("#img_slide>ul").append($(".vnbr3"));

        }else if( $("#img_slide>ul>li:first-of-type").hasClass("vbnr2") ){
            $("#img_slide>ul").append($(".vbnr3"));
            $("#img_slide>ul").append($(".vbnr1"));

        }else{
            $("#img_slide>ul").append($(".vbnr1"));
            $("#img_slide>ul").append($(".vbnr2"));
        }
}
*/


/*서치바 레이어 이벤트*/
$("#searchicon").click(function(){
    $("#searchbar").css("display","block");
    $("#searchbar").animate({top:'100%'},400);
});
$("#searchclose").click(function(){
    $("#searchbar").animate({top:'-1000%'},400,function(){
        $("#searchbar").css("display","none");
    });
});
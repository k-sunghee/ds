// JavaScript Document

$(function(){
	
    // 모바일 사이즈 구분
    function updateBodyClass() {
        if ($(window).width() <= 768) {
            $('body').addClass('mobile');
        } else {
            $('body').removeClass('mobile');
        }
    }
    updateBodyClass();
    $(window).resize(updateBodyClass);    
    
    // 메인 Fullpage
	$('#fullpage').fullpage({
		navigation: false,
		menu: '#main_nav',
		anchors: ['Main', 'Infra', 'Image', 'Cad', 'Customer'],
		afterLoad: function (anchorLink, index){
			if (index == 1 ){				
				$('.main_sec01').addClass('on');
				$('#main_nav > ul > li').eq(0).addClass('on');	
				var videoM = document.getElementById("videoM");
				videoM.play();
			}
			if(index == 2 ){
				$('.main_sec02').addClass('on');
				$('#main_nav > ul > li').eq(1).addClass('on');
			}
			if(index == 3){
				$('.main_sec03').addClass('on');
				$('#main_nav > ul > li').eq(2).addClass('on');
			}
		},		
		onLeave:function (index, nextIndex){
			$('#main_nav > ul > li').removeClass('on');
			$('#main_nav > ul > li').eq(nextIndex-1).addClass('on');

			if(nextIndex == 4){
				$('#main_nav').removeClass('on');
			}else{
				$('#main_nav').addClass('on');
			}
		}
	});	

    // 메인 섹션별 마우스 오버 배경변경	
	$('.main_visual').find('.visual_menu').on('mouseover', 'li', function() {
		var selectedIndex = $(".visual_menu > ul > li").index(this);
        $('.visual_bg > div:eq(' + selectedIndex + ')').addClass('on').removeClass('off');
		$('.visual_bg > div:eq(' + selectedIndex + ')').siblings().addClass('off').removeClass('on');
        $('.visual_menu > ul > li:eq(' + selectedIndex + ')').addClass('on');
		$('.visual_menu > ul > li:eq(' + selectedIndex + ')').siblings().removeClass('on');
	});	
	$('.main_visual').find('.visual_menu').on('mouseout', 'li', function() {
		var selectedIndex = $(".visual_menu > ul > li").index(this); 	
        $('.visual_menu > ul > li:eq(' + selectedIndex + ')').removeClass('on')
	});	
	
	
	// 메인 비쥬얼 네비
	$(window).on('load',function(){
		$('#main_nav').addClass('on');
		$('.container').addClass('load');
	});
    
    
   // GNB 반응형
    $(".header .gnb > ul").clone().appendTo(".m_gnb")
    $(".header .gnb > ul").hover(function(){
        $(".header").addClass("hover");
        $(".header .gnb > ul > li > ul").stop().slideDown(400);
        $(".header .bg").stop().slideDown(300)
    }, function(){
        $(".header").removeClass("hover");
        $(".header .gnb > ul > li > ul").stop().slideUp(400);
        $(".header .bg").stop().slideUp(500)
    })
    $(".header .header_ui .m_btn").click(function() {
        $(this).toggleClass("on");
        $(".header .header_ui .m_gnb").toggleClass("on");
    });
    $(document).on("click",".header .header_ui .m_gnb > ul > li > a", function() {
        $(this).removeAttr('href');
        var is_display = $(this).next(".sub_depth").css("display");
        if (is_display == "block") {
            $(this).next(".sub_depth").stop().slideUp();
            $(this).parent('li').removeClass('active');
        } else {
            $(".sub_depth").stop().slideUp();
            $(this).next(".sub_depth").stop().slideDown();
            $(".header .header_ui .m_gnb.on > ul > li").removeClass('active');
            $(this).parent('li').addClass('active');
        }
        return false;
    });
	
    
    
    // 푸터
    $(".footer .top .family p").on("click", function(){
        $(this).next().stop().slideToggle();
    })
    $(".footer .top_btn").on("click", function(){
        $("html, body").stop().animate({scrollTop:0}, 600)
    });
    
    
    
    // 서브페이지 스크롤시 헤더 클래스 추가 
    $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            $(".header").addClass("scroll");
        } else{
            $(".header").removeClass("scroll");
        }
    });
    
    
    // 서브페이지 스크롤 TOP 버튼 
	$(window).scroll(function(){
        var nowScrollTop = $(this).scrollTop();
        var headerHeight = $('.header').outerHeight();
        var footerPosTop = $(document).height() - $(window).height() - $('footer').outerHeight();
        var elementTop = $('.header').offset().top;

        if(nowScrollTop > footerPosTop){
            $('.foot_btn_box').css('bottom', (nowScrollTop - footerPosTop) + 30 +'px');
        }else{
            $('.foot_btn_box').css('bottom', '30px');
        }
        if(nowScrollTop > headerHeight){
            $('.foot_btn_top').addClass('on');
        }else{
            $('.foot_btn_top').removeClass('on');
        }	

        if (nowScrollTop >= elementTop) {
             $('.mobile > header').addClass('fixed');
        } else {
             $('.mobile > header').removeClass('fixed');
        }         
    });	
	
	$('.foot_btn_top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
    });	
    
    
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > 600) {
			$(".sub_tab_history").addClass("fixed");
		} else {
			$(".sub_tab_history").removeClass("fixed");
		}
	}); 
	
//	
//	// 서브 로케이션 전체메뉴
//	$(".allmenu > button").on("click", function() {
//		$(".popmenu").addClass("active");
//		$(".popmenu_bg").addClass("active");
//		$('body').css({"overflow":"hidden"});
//	});
//
//	$(".popmenu > .close").on("click", function() {
//		$(".popmenu").removeClass("active");
//		$(".popmenu_bg").removeClass("active");
//		$('body').css({"overflow":"auto"});
//	});
//	
	
	// 서브페이지 탭메뉴
	$(".sub_tab_menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var sub_tab_con = $(this).attr("href");
        $(".sub_tab_box").not(sub_tab_con).css("display", "none");
        $(sub_tab_con).fadeIn();
    });	
	
	// 카톡 1:1 상담
    $("header .util > .talk").on("mouseenter focusin", function () {
        $("header .util > .talk").addClass('open');
        $("header .util > .talk > ul").stop().slideDown(300);
    })
    $("header .util > .talk").on("mouseleave focusout", function () {
        $("header .util > .talk").removeClass('open');
        $("header .util > .talk > ul").stop().slideUp(300);
    })

	// 서브메인 리스트
    $(".sub_main .mainlist > li").on("mouseenter focusin", function () {
		$(this).removeClass("off").addClass("on");
		$(this).siblings().addClass("off");
    })
	$(".sub_main .mainlist > li").on("mouseleave focusout", function () {
		$(this).removeClass("on").addClass("off");
		
    })
    
    
    // 서브 현재 위치 
	$(".sub_position > li").click(function() {
		$(this).toggleClass("open");
		$(this).find("ul").slideToggle();
	});
	$(".sub_position > li").mouseleave(function() {
		if ( $(this).find('ul').css("display") == "block" ) {
			$(this).removeClass("open");
			$(this).find('ul').slideUp();
		}
	});
    
    // Footer 패밀리사이트
	$('.foot_family > .selectbox >  a').on('click',function() {
		if(!$(this).parent().hasClass('on')) {
			$(this).parent().addClass('on').siblings().removeClass('on');
			$('.foot_family > .selectbox > ul').slideUp(300);
			$(this).next().slideDown(300);
		}else{
			$(this).parent().removeClass('on').siblings().removeClass('on');
			$('.foot_family > .selectbox > ul').slideUp(300);
			$(this).next().slideUp(300);
		}
		return false;
	});
    
    
	
	// Footer 패밀리사이트 영역외 클릭시 닫힘
	$('body').click(function(evt) {
		if(!$('.foot_family > .selectbox > ul').has(evt.target).length) {
			$('.foot_family > .selectbox > ul').slideUp(200);
			$('.foot_family > .selectbox').removeClass('on');
		}
	});
	

    var historyTab = '.sub_tab_history '
	
    function onScroll() {
        $(historyTab + ' a').each(function(){
            var anchor      = $(this).attr('href');
            var scrollTop   = $(document).scrollTop();
            var positionTop = $(anchor).position().top - 150;
            var outerHeight = $(anchor).outerHeight();

            if ((positionTop <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
                $(this).addClass('active');

            } else {
                $(this).removeClass('active');	
            }

        });
    }
    $(document).on('scroll', onScroll);
    
});







        








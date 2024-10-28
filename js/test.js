$(function() {
	$("header nav > ul.gnb").clone().appendTo(".m_gnb")

	$("header nav > ul.gnb").hover(function(){
		$("header").addClass("hover");
		$("header nav > ul.gnb > li > ul").stop().slideDown(400);
		$("header .bg").stop().slideDown(300)
	}, function(){
		$("header").removeClass("hover");
		$("header nav > ul.gnb > li > ul").stop().slideUp(400);
		$("header .bg").stop().slideUp(500)
	});
    

	$("header .header_ui .m_btn").on("click", function(){
		$(this).toggleClass("on");
		$("header .header_ui .m_gnb").toggleClass("on");
		$("header .header_ui .m_gnb > ul > li > a").next().stop().slideUp();
	})
	$("header .header_ui .m_gnb > ul > li > a").on("click", function(e){
		e.preventDefault();
		$(this).next().stop().slideToggle();
		$(".header .header_ui .m_gnb > ul > li > a").not(this).next().stop().slideUp();
	})

	$(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$("header").addClass("scroll")
		} else{
			$("header").removeClass("scroll")
		}
	})
}

  
  
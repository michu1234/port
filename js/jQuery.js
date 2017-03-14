$(document).ready(function(){
	$(function() {
		$(".info1").addClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
	});

	$(".home").click(function(){
		$(".info1").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
	});
	$(".about").click(function(){
		$(".info2").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
	});
	$(".skills").click(function(){
		$(".info3").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
	});
	$(".works").click(function(){
		$(".info4").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2");
	});

	$(".contact").click(function(){
		$("#map").toggleClass("animateinfo2").siblings().removeClass("animateinfo2");
	});

	$(".contact").click(function(){
		$(".info5").toggleClass("animateinfo").siblings().removeClass("animateinfo offacc imgdown");
	});

	$(".tool").click(function(){
		$(".content").toggleClass("off")
	});
	$(".tool").click(function(){
		$(".img2").toggleClass("offimg")
	});

	$(".works").click(function(){
		$(".accordion").toggleClass("offacc");
	});

	$(".works").click(function(){
		$(".logo2").toggleClass("imgdown");
	});

});


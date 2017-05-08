
$(document).ready(function(){
	$(".load-container").delay(5000).slideUp("slow");
	$(".container").show("fast");
	$(function() {
		$(".info1").addClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
	});

$(".logo > img").mouseout(function(){
	$(this).addClass("imgreverse")
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


// MOBILE MENU //

	var menuStatus = false;
	$('.slideout').hide();

	function open() {
		$('.first, .second, .third, .hid').addClass('animate');
		menuStatus = true;
	}

	function close() {
		$('.first, .second, .third, .hid').removeClass('animate');
		menuStatus = false;
	}
	$('.menu-btn').click(function () {
		$('.slideout').toggle('slide');
		if (menuStatus === false) {
			$('.menu-txt').html('Close');
			open();
		}
		else {
			$('.menu-txt').html('David');
			close();
		}
	});



$(".home1").click(function(){
	$(".info1").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
});
$(".about1").click(function(){
	$(".info2").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
});
$(".skills1").click(function(){
	$(".info3").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2 offacc imgdown");
});
$(".works1").click(function(){
	$(".info4").toggleClass("animateinfo").siblings().removeClass("animateinfo animateinfo2");
});
$(".works1").click(function(){
	$(".accordion").toggleClass("offacc");
});

$(".works1").click(function(){
	$(".logo2").toggleClass("imgdown");
});

$(".contact1").click(function(){
	$("#map").toggleClass("animateinfo2").siblings().removeClass("animateinfo2");
});

$(".contact1").click(function(){
	$(".info5").toggleClass("animateinfo").siblings().removeClass("animateinfo offacc imgdown");
});

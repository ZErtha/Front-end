$(function() {
	var index = 0;
	$(".prev").click(function() {
		index--;
		if (index < 0) {
			index = 5;
		}
		$(".pc").css("background", "url(img/adver0" + (index + 1) + ".jpg)");
	});
	$(".next").click(function() {
		index++;
		if (index > 5) {
			index = 0;
		}
		$(".pc").css("background", "url(img/adver0" + (index + 1) + ".jpg)");
	});
	$(".pc").mousemove().mouseout();


})

var header = document.querySelector('.headerTop')
var goTop = document.querySelector('.goTop')
window.onscroll = function() {
	var height = document.documentElement.scrollTop || document.body.scrollTop
	if (height >= 300) {
		header.style.top = '0px'
		goTop.style.display = 'block'
	} else {
		header.style.top = '-80px'
		goTop.style.display = 'none'
	}
}

goTop.onclick = function() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

// 以下是页面漂浮广告代码
var x = 50,
	y = 60;
var xin = true,
	yin = true;
var step = 1;
var L = T = 0;
var R = document.documentElement.clientWidth - 200;
var B = document.documentElement.clientHeight - 150;
var obj = document.getElementById("adv");

function float0() {
	x = x + step * (xin ? 1 : -1);
	if (x < L) {
		xin = true;
		x = L;
	}
	if (x > R) {
		xin = false;
		x = R;
	}
	y = y + step * (yin ? 1 : -1);
	if (y < T) {
		yin = true;
		y = T;
	}
	if (y > B) {
		yin = false;
		y = B;
	}
	var xx = x + document.body.scrollLeft;
	var yy = y + document.body.scrollTop;
	obj.style.left = xx + "px";
	obj.style.top = yy + "px";
}

var itl = setInterval(float0, 30);
obj.onmouseover = function() {
	clearInterval(itl)
};
obj.onmouseout = function() {
	itl = setInterval(float0, 30);
};

// 以下是图片焦点自动与手动轮播代码
function mainfun(mainObj, t) {
	function getID(id) {
		return document.getElementById(id)
	}

	function getTag(tag, obj) {
		return (typeof obj == 'object' ? obj : getID(obj)).getElementsByTagName(tag);
	}

	var cut = 0;
	var timer = '';
	var num = getTag('li', getTag('div', getID(mainObj))[0]).length;
	var getpic = getTag('li', getTag('div', getID(mainObj))[0]);
	var getbtn = getTag('li', getTag('div', getID(mainObj))[1]);
	for (i = 0; i < num; i++) {
		getpic[i].style.display = "none";
		getbtn[i].onclick = (function(i) {
			return function() {
				getbtn[i].className = "sel";
				changePic(i);
			}
		})(i);
	}
	getpic[cut].style.display = "block";
	getbtn[cut].className = "sel";
	getID(mainObj).onmouseover = function() {
		clearInterval(timer);
	}
	getID(mainObj).onmouseout = function() {
		timer = setInterval(autoPlay, t);
	}

	function changePic(ocut) {
		for (i = 0; i < num; i++) {
			cut = ocut;
			getpic[i].style.display = "none";
			getbtn[i].className = "";
		}
		getpic[cut].style.display = "block";
		getbtn[cut].className = "sel";
	}

	function autoPlay() {
		if (cut >= num - 1) {
			cut = 0;
		} else {
			cut++;
		}
		changePic(cut);
	}
	timer = setInterval(autoPlay, t);
}
mainfun("movePicl", 2000);

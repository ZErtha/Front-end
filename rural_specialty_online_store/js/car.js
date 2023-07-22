var fav = document.getElementsByName("fav"); /*多选框取名为fav,获取所有的多选框对象*/
var nu = document.getElementsByName("nu"); /*数量框取名为nu,获取所有的数量框对象*/

/*全选→单选*/
function checkTest1(th) {
	var flag = th.checked;
	for (var i in fav) {
		fav[i].checked = flag;
	} 
}

function checkTest2() {
	var flag = true;
	for (var i = 1; i < fav.length - 1; i++) {
		if (!fav[i].checked) {
			flag = false;
			break;
		}
	}
	fav[0].checked = flag;
	fav[fav.length - 1].checked = flag;

	tot = 0;
	num = 0;
	spnum = 0;
	for (var i = 1; i < fav.length - 1; i++) {
		if (fav[i].checked) {
			num++;
			var par = fav[i].parentNode.parentNode;
			var li = par.getElementsByTagName("li");
			var singleTotalPrice = li[6].innerHTML.split("¥")[1]; 
			tot += Number(singleTotalPrice);
			document.getElementById("tp").innerHTML = "¥" + tot.toFixed(2);
			var conmodityInputs = li[5].getElementsByTagName("input"); 
			var commodityNum = conmodityInputs[0].value; 
			spnum += Number(commodityNum);
			document.getElementById("tn").innerHTML = spnum;
		}
	}
	if (num == 0) {
		document.getElementById("tp").innerHTML = "¥" + "0.00"; 
		document.getElementById("tn").innerHTML = 0;
	}
}

function checkTest3(th, sig) {
	var obj;
	if (sig == "1") {
		obj = th.nextElementSibling;
		if (obj.value > 0) {
			obj.value = Number(obj.value) - 1;
		}
	} else{
		obj = th.previousElementSibling; 
		obj.value = Number(obj.value) + 1;
	}
	var price = obj.parentNode.previousElementSibling.innerHTML;
	console.log(price);
	var total = (price * obj.value).toFixed(2); 
	obj.parentNode.nextElementSibling.innerHTML = "¥" + total;
}

function checkTest4(th) {
	var div = th.parentNode.parentNode.parentNode; /*a→li→ul→div*/
	div.remove();
}

function checkTest5(th) {
	var price = th.parentNode.previousElementSibling.innerHTML;
	var total = (price * Number(th.value)).toFixed(2);
	th.parentNode.nextElementSibling.innerHTML = "¥" + total;
}

function checkTest6() {
	console.log(fav);
	for (var i = 1; i < fav.length - 1; i++) {
		if (fav[i].checked) {
			checkTest4(fav[i])
		}
	}
	for (var i = 1; i < fav.length - 1; i++) {
		if (fav[i].checked) {
			checkTest4(fav[i])
		}
	}
}
function checkTest7() {
	for (var i = 0; i < fav.length; i++) {
		fav[i].checked = false;
	}
	for (var i = 0; i < nu.length; i++) {
		nu[i].value = 0;
	}
}

function tips() {
	alert("不含运费及送装服务")
}

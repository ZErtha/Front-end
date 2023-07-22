function pop() {
	console.log('我是父页面的pop方法');
	document.getElementById('light').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function loginClose() {
	console.log('我是父页面的loginClose方法');
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}

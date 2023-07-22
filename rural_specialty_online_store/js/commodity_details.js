$("input.number").attr("readonly", "1").click(function(e) {
	var self = $(this);
	var x = e.pageX - self.offset().left;
	var y = e.pageY - self.offset().top;
	var d = 0;
	if (x <= 20) {
		self.css("background-image", "url(./img/bg_number_box3.png)");
		d = -1;
	}
	if (x >= 50) {
		self.css("background-image", "url(./img/bg_number_box4.png)");
		d = 1;
	}
	if (d != 0) {
		self.val(Math.min(Math.max((parseInt(self.val()) || 0) + d, parseInt(self.attr("min"))), parseInt(
			self.attr("max"))));
		setTimeout(function() {
			self.css("background-image", "");
		}, 200);
	}
});

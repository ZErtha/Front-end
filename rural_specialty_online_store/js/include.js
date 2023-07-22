$(function () {
    $.get("../common.html",function (data) { //引入时的页面名称
        $("#header").html(data); //引入时的ID
    });
    // $.get("footer.html",function (data) {
    //     $("#footer").html(data);
    // });
});
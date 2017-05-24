$(function() {
	$(".card").click(function () {
		console.log("clickec on card")
		var newcard = shuffle.pop();
		$("#card01").html(newcard);
	})
})
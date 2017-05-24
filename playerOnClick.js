$(function() {
	function changeCard() {
		console.log("clickec on card")
		var newcard = shuffle.pop();
		$("#card01").html(newcard);
	}
	$(".card").click(function() {
		console.log("clickec on card")
		var newcard = shuffle.pop();
		$("#card01").html(newcard);
		setTimeout(changeCard, 5000);
	})
})
		// setTimeout(changeCard, 5000);

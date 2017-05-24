
function changeCard() {
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	$("#card01").html(newcard);
}
$(".card").click(function() {
	console.log("Playing a player card...")
	var newcard = shuffle.pop();
	$("#card01").html(newcard);
	setTimeout(changeCard, 5000);
})

 

		// setTimeout(changeCard, 5000);

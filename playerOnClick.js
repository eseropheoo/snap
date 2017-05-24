
function changeCard() {
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	discard.push(newcard);
	console.log("player discard", newcard);
	$("#card01").html(newcard);

}
$(".card").click(function() {
	console.log("Playing a player card...")
	var newcard = shuffle.pop();
	discard.push(newcard);
	console.log("cpu discard", newcard);
	$("#card01").html(newcard);
	setTimeout(changeCard, 5000);
})

 


		

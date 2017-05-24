var computerSnapTimeout;

function checkSnap(person) {
	var currCard = discard[discard.length-1];
	var secLastCard = discard[discard.length-2];

	if (currCard && secLastCard && currCard[0] === secLastCard[0]){
		alert(person +  " snap!")
		// 2. output snap to screen
		// 3. move all cards from discard array to player or cpu
	}

}



function changeCard() {
	checkSnap("cpu");
	
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	// 4. check to see if cpu has any chards left, if not, they have lost the game
	discard.push(newcard);
	console.log("cpu discard", newcard);
	$("#card01").html(newcard);


	computerSnapTimeout = setTimeout(function () {
		checkSnap("computer")
	}, 2500);
	// 1. player ones turn
}

	

$(".card").click(function() {
	console.log("Playing a player card...")
	var newcard = shuffle.pop();
	// check to see if player has any chards left, if not, they have lost the game

	discard.push(newcard);
	console.log("player discard", newcard);
	$("#card01").html(newcard);
	setTimeout(changeCard, 3000);
	// 1. computer's turn
})
 
 
$("#snap").click(function(){
	clearTimeout(computerSnapTimeout);
	checkSnap("player");	
})	

 




		

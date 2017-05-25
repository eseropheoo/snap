var computerSnapTimeout;
var start = $("#person").html("player starts");


function checkSnap(person) {
	var currCard = discard[discard.length-1];
	var secLastCard = discard[discard.length-2];

	if (currCard && secLastCard && currCard[0] === secLastCard[0]){
		alert(person +  " snap!")
		// 2. output snap to screen
		// 3. move all cards from discard array to player or cpu
	
	} if(cpu && currCard && secLastCard && currCard[0] === secLastCard[0]) {
		discard.push(cpu);
	} else if(player && currCard && secLastCard && currCard[0] === secLastCard[0]){
			discard.push(player);
		}	
}



function changeCard() {
	checkSnap("cpu");
	
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	// 4. check to see if cpu has any cards left, if not, they have lost the game
	if(cpu === null){
		alert("you won")
	}
	discard.push(newcard);
	console.log("cpu discard", newcard);
	$("#card01").html(newcard);


	computerSnapTimeout = setTimeout(function () {
		checkSnap("computer")
	}, 2500);
	
	$("#person").html("players turn");
}

	

$(".card").click(function() {
	console.log("Playing a player card...")
	var newcard = shuffle.pop();
	// 4.check to see if player has any chards left, if not, they have lost the game
	if(player === null){
		alert("you lost");
	}
	discard.push(newcard);
	console.log("player discard", newcard);
	$("#card01").html(newcard);

	setTimeout(changeCard, 3000);
	
	$("#person").html("computer turn");
})
 
 
$("#snap").click(function(){
	clearTimeout(computerSnapTimeout);
	checkSnap("player");	
})	

 




		

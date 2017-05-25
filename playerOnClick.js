var computerSnapTimeout;
var start = $("#person").html("player starts");


function checkSnap(person) {
	var currCard = discard[discard.length-1];
	var secLastCard = discard[discard.length-2];

	if (currCard && secLastCard && currCard[0] === secLastCard[0]){
		$("#snapAlert").html(person + " has snapped!");
			
		
		
		if(person === "player") {
			player = player.concat(discard);
			console.log("discard in player");
			discard = []

		} else if(person === "cpu"){
			cpu = cpu.concat(discard);
			console.log("discard in player");
			discard = [];
		}
		setTimeout( function() {
			$("#snapAlert").html("");
		}, 2000);
	}

	// if (currCard && secLastCard && currCard[0] === secLastCard[0]){
	// 	$("#snapAlert").html(person + " has snapped!");
			
		
		
	// 	if(person === "player") {
	// 		player = player.concat(discard);
	// 		console.log("discard in player");
	// 		discard = []

	// 	} else if(person === "cpu"){
	// 		cpu = cpu.concat(discard);
	// 		console.log("discard in player");
	// 		discard = [];
	// 	}
	// }
}



function changeCard() {
	checkSnap("cpu");
	
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	// 4. check to see if cpu has any cards left, if not, they have lost the game. Link victory page
	if(cpu.length ===  0){
		alert("you won");

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
	// 4.check to see if player has any chards left, if not, they have lost the game. Link Loss page
	if(player.length === 0){
		alert("you lost");
	}
	discard.push(newcard);
	console.log("player discard", newcard);
	$("#card01").html(newcard);

	setTimeout(changeCard, 2500);
	
	$("#person").html("computer turn");
})
 
 
$("#snap").click(function(){
	clearTimeout(computerSnapTimeout);
	checkSnap("player");
})	

 




		

var computerSnapTimeout;
var start = $("#person").html("player starts");

$(".gif").hide();

function checkSnap(person) {
	var currCard = discard[discard.length-1];
	var secLastCard = discard[discard.length-2];

	if (currCard && secLastCard && currCard[0] === secLastCard[0]){
		$("#snapAlert").html(person + " has snapped!");

		if(person === "player") {
			$(".gif").show();
			player = player.concat(discard);
			
			discard = []

		} else if(person === "cpu"){
			cpu = cpu.concat(discard);
			
			discard = [];
		}
		setTimeout( function() {
			$("#snapAlert").html("");
		}, 2000);
		setTimeout( function() {
			$(".gif").hide();
		}, 2000);
	}

	
}



function changeCard() {
	checkSnap("cpu");
	
	
	var newcard = cpu.pop();
	// 4. check to see if cpu has any cards left, if not, they have lost the game. Link victory page
	if(cpu.length ===  0){
		window.location.href = "winner.html";
		return ;

	}
	discard.push(newcard);
	console.log("cpu discard", newcard);
	$("#card01").html(newcard);


	computerSnapTimeout = setTimeout(function () {
		checkSnap("cpu")
	}, 2500);
	
	$("#person").html("players turn");
}

	

$(".card").click(function() {
	
	var newcard = shuffle.pop();
	// 4.check to see if player has any chards left, if not, they have lost the game. Link Loss page
	if(shuffle.length === 0){
		window.location.href = "winner.html";
		return;
	}
	discard.push(newcard);
	
	$("#card01").html(newcard);

	setTimeout(changeCard, 2500);
	
	$("#person").html("computer turn");
})
 
 
$("#snap").click(function(){
	clearTimeout(computerSnapTimeout);
	checkSnap("player");
})	

 




		

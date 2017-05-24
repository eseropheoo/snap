
function changeCard() {
	console.log("playing a cpu card...")
	var newcard = cpu.pop();
	discard.push(newcard);
	console.log("cpu discard", newcard);
	$("#card01").html(newcard);

}
$(".card").click(function() {
	console.log("Playing a player card...")
	var newcard = shuffle.pop();
	discard.push(newcard);
	console.log("player discard", newcard);
	$("#card01").html(newcard);
	setTimeout(changeCard, 3000);
})
 
 



$("#snap").click(function(){
	var currCard = discard[discard.length-1];
	var secLastCard = discard[discard.length-2];
	
 	if (currCard[0] === secLastCard[0]){
		alert("snap");
	}
})	

 




		

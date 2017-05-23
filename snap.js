$(function() {

// Create a variable for an array of 
// random
// on click
// if statements to match
// alert
// 

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// var blackSpadesCard = [1, 2, 3, 4];
// var blackClubsCard = [1, 2, 3, 4];
// var redHeartsCard = [1, 2, 3, 4];
// var redDiamondsCard = [1, 2, 3, 4];
var cards = ["1 blackClubs", "2 blackClubs", "3 blackClubs", "4 blackClubs", "5 blackSpadesCard", "6 blackSpadesCard", 
"7 blackSpadesCard","8 blackSpadesCard" , "9 redHeartsCard", "10 redHeartsCard", "11 redHeartsCard", "12 redHeartsCard", "13 redDiamondsCard", "14 redDiamondsCard", "15 redDiamondsCard", "16 redDiamondsCard"];
shuffle = [];
var x;
// blackSpadesCard = shuffle(blackSpadesCard);
// console.log('blackSpadesCard', blackSpadesCard);
// blackClubsCard = shuffle(blackClubsCard);
// console.log('blackClubsCard', blackClubsCard);
// redDiamondsCard = shuffle(redDiamondsCard);
// console.log('redDiamondsCard', redDiamondsCard);
// redHeartsCard = shuffle(redHeartsCard);
// console.log('redHeartsCard', redHeartsCard);
// cardSuite = shuffle(cardSuite);
// console.log('cardSuite', cardSuite);



// for (var i = 0; i <= cardNo.length; i++) {
// 	console.log(cardNo);
	// for (var j = 0; blackClubsCard.length; j++) {
	// 	console.log(blackClubsCard);
	// 	$("div#card" + [i++]).html(blackClubsCard[j++]);
	// }
// }

// for (var i = 0; i < blackClubsCard.length; i++) {
// 		console.log(blackClubsCard);
// 		$("div#card01").html(blackClubsCard[i++]);
// 		$("div#card02").html(blackClubsCard[i++]);
// 		$("div#card03").html(blackClubsCard[i++]);
// 		$("div#card04").html(blackClubsCard[i++]);
// 	}

// for (var i =0; i< blackSpadesCard.length; i++){
// 		console.log(blackSpadesCard);
// 		$("div#card05").html(blackSpadesCard[i++]);
// 		$("div#card06").html(blackSpadesCard[i++]);
// 		$("div#card07").html(blackSpadesCard[i++]);
// 		$("div#card08").html(blackSpadesCard[i++]);
// }

   function rdm(n){
 	 x = Math.floor(Math.random() * n);
 }

for( i = 0; i < 16; i++) {
	rdm(cards.length);
	
	shuffle.push(cards[x]);
	cards.splice(x, 1);
	console.log(shuffle);
	$($(".card")[i]).html(shuffle[i]);
	console.log($('.card'))
	
}









})

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

var blackSpadesCard = [1, 2, 3, 4];
var blackClubsCard = [1, 2, 3, 4];
var redHeartsCard = [1, 2, 3, 4];
var redDiamondsCard = [1, 2, 3, 4];


blackSpadesCard = shuffle(blackSpadesCard);
console.log('blackSpadesCard', blackSpadesCard);
blackClubsCard = shuffle(blackClubsCard);
console.log('blackClubsCard', blackClubsCard);
redDiamondsCard = shuffle(redDiamondsCard);
console.log('redDiamondsCard', redDiamondsCard);
redHeartsCard = shuffle(redHeartsCard);
console.log('redDiamondsCard', redDiamondsCard);

for (var i = 0; i < blackClubsCard.length; i++) {
	console.log(blackClubsCard);
	$("div#card01").html(blackClubsCard[i++]);
	$("div#card02").html(blackClubsCard[i++]);
	$("div#card03").html(blackClubsCard[i++]);
	$("div#card04").html(blackClubsCard[i++]);
}


});

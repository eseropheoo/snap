$(function() {


function shufflePack(array) {
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


var cards = ["1 &clubs;", "2 &clubs;", "3 &clubs;", "4 &clubs;", "5 &clubs;", "6 &clubs;", "7 &clubs;", "8 &clubs;", "9 &clubs;", "10 &clubs;" , "J &clubs;", "Q &clubs;", "K &clubs;", 
"1 &spades;", "2 &spades;", "3 &spades;","4 &spades;", "5 &spades;", "6 &spades;", "7 &spades;", "8 &spades;", "9 &spades;", "10 &spades;", "J &spades;", "Q &spades;", "K &spades;",
 "1 &hearts;", "2 &hearts;", "3 &hearts;", "4 &hearts;", "5 &hearts;", "6 &hearts;", "7 &hearts;", "8 &hearts;", "9 &hearts;", "10 &hearts;","J &hearts;", "Q &hearts;", "K &hearts;",
 "1 &#9830;", "2 &#9830;", "3 &#9830;", "4 &#9830;", "5 &#9830;", "6 &#9830;", "7 &#9830;", "8 &#9830;", "9 &#9830;", "10 &#9830;", "J  &#9830;", "Q &#9830;", "K &#9830;"]
shuffle = [];
var x;

// var player = cards.slice(0, 26);
// var cpu = cards.slice(26, 52);

   function rdm(n){
 	 x = Math.floor(Math.random() * n);
 }

for( i = 0; i < 52; i++) {
	rdm(cards.length);
	shuffle.push(cards[x]);
	cards.splice(x, 1);
	// show random suites & numbers on html.
	$($(".card")[i]).html(shuffle[i]);
	// console.log($('.card'))
  // console.log("Cards:", cards[i])
}
// console.log(cards)
// console.log(shuffle)

  var player = shuffle;
  var cpu = player.splice(26, 52);
  // shuffle.push(cards[x]);

  console.log("player", player)
  console.log("cpu", cpu)

  // cards = shufflePack(cards);
  // console.log("cards", cards);
  // playerCards = shufflePack(playerCards);
  // console.log("playerCards", playerCards);

function playerMove(playerCards) {
    for (i =0; i < 25; i++){
      rdm(playerCards);
      playerCards = shufflePack(playerCards);
      shuffle.push(playerCards[x]);
      playerCards.splice(x, 1);
      console.log("playerCards", playerCards[i])
    }
  }
      // console.log("playerCards", playerCards);

    
  function cpuMove (cpuCards) {
    for (i =26; i < 51; i++) {
      rdm(cpuCards);
      shuffle.push(cpuCards[x]);
      cpuCards.splice(x, 1);
    }
    console.log("cpuMove", cpuCards); 

  }

 })



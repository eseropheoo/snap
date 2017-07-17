#ESnap - An online card snap game.
-


##Motivation

As part of a training project. I was given the task to create a browser-based game implementing the use of html, css and javascript.


## Intial plan

### Description
ESnap is a public free- web browser single player snap game.

The objective of the game is to get all of the cards in your deck by clicking on the snap button when two of rank are identical.

### How to play
- The game starts with a main deck that holds 52 cards, player and cpu decks are both empty.

- There is a status board that dictates who's turn it is.

- Click the card at the center of the table. To reveal your card.

- Next the computer will play their card.

- The player and the cpu will keep playing until two of the last cards have the same rank, the player will only have 2 seconds to click the snap button before the cpu does.

- Whoever gets the snap will have all the previous cards added to their deck.

- Whoever gets the most cards in their deck before the main deck runs out wins. 

- If the player wins he'll be sent to the winners page and if he loses the loser page.

###Logic 

- Get the status board to switch when it's the CPU and players turn.

- The main deck to randomise the cards displayed.

- player 1 can click the card and it displays a new one.

- The Cpu clicks a card after player 1.

- When two cards have the same rank, the snap function works.

- When player 1 gets the snap a congrats gif appears.

- If player doesn't press the snap, the computer will snap after 2 seconds.

- The link to the winner and loser page work accordingly.

###HTML

- There are 4 html files for the home,snap, winner and loser page.

####CSS

- For each html page there is a css page.

####Javascript

- There are two javascript files:

- The snap.js contains the logic for all 52 cards, the shuffle and randomising of the deck and pushing up to the page.

- The 'player on click' file contains the logic for "check for snap" and "change card" for player and CPU.

## Challenges
- Creating an array of 52 cards and pushing one random card on to the table.
- Creating check snap and afterwards pushing the discarded card array into the player or CPU array.


##Pre-installation
- Git Clone the folder onto your local host. 

-  Open using a text editor. 

- Open one of the html files, right click and press the "Open the browser" button.


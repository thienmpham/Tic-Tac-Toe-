// Generate gameboard 3x3
function generateGame() {
  let gameboard = {
    tiles: [],
    players: { player1: "X", player2: "O" },
    // Player chooses choices X or O
    choosePlayer() {
      let choice;
      choice = this.players.player1;
    },
  };
}

// Player chooses which tile to place choice

// Check to see if a choice is in tile
// IF tile is empty
// THEN place choice inside tile
// ELSE player chooses tile again

// Player places choice inside chosen tile

// Check to see if 3 in a row of said choice
// IF there is 3 in a row
// THEN player wins and game ends!
// ELSE its other players turn

// 1.Generate gameboard 3x3

function renderGame() {
  let gameboard = {
    tiles: [],
    players: { player1: "X", player2: "O" },
    // 2.Player chooses choices X or O
    choosePlayer() {
      let counter = null;
      let choice;

      if (counter == null) {
        // User chooses player type
        counter = 0;
      }

      if (counter == 0) {
        choice = this.players.player1;
        counter = 1;
      } else {
        choice = this.players.player2;
        counter = 0;
      }

      // counter++;
      return choice;
    },
  };

  checkTilesIfEmpty(gameboard);
  return gameboard;
}
renderGame();

function checkTilesIfEmpty(gameboard) {
  let choice = gameboard.choosePlayer();
  let tiles = gameboard.tiles;
  console.log(tiles, choice);
  // 3.Player chooses which tile to place choice
  let tileChoice = tiles[chooseTile()];

  // 4 Check to see if a choice is in tile
  // 4.1 IF tile is empty
  // 4.2 THEN place choice inside tile
  // 4.3 ELSE player chooses tile again
  if (tileChoice !== null) {
    console.log("Choose");
    return false;
    // tiles.splice(tileChoice, 1, choice);
  } else {
    console.log("invalid tile choice.. Choose again.");
    chooseTile();
  }
}

function chooseTile() {
  // 0-9
  let num = prompt("Pick a tile #1-9");
  if (num > 0 && num < 9) {
    console.log(`You chose Tile #${num}!`);
    return num;
  } else {
    console.log("ERROR: tile choice is invalid.");
  }
}
// 5 Player places choice inside chosen tile

// 6 Check to see if 3 in a row of said choice
// 6.1 IF there is 3 in a row
// 6.2 THEN player wins and game ends!
// 6.3 ELSE its other players turn

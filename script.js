// 1.Generate gameboard 3x3

function renderGame() {
  let gameboard = {
    tiles: [],
    players: { player1: "X", player2: "O" },
    // 2.Player chooses choices X or O
    choosePlayer() {
      let counter;
      let choice;

      if (counter == null) {
        // User chooses player type
        counter = 1;
      }

      if (counter == 1) {
        choice = this.players.player1;
        counter = 2;
      } else {
        choice = this.players.player2;
        counter = 1;
      }
      return choice;
    },
  };

  gameboard.tiles = chooseTile(gameboard);
  return gameboard;
}
renderGame();

function chooseTile(gameboard) {
  let tilesArray = gameboard.tiles;

  // 0-9
  // 3.Player chooses which tile to place choice
  let num = prompt("Pick a tile #1-9");
  let empty = checkTilesIsEmpty(tilesArray, num);

  if (num > 0 && num < 9 && empty == true) {
    console.log(`You chose Tile #${num}!`);
    return populateTiles(gameboard, tilesArray, num);
  } else {
    console.log("ERROR: tile choice is invalid.");
    chooseTile();
  }
}
function checkTilesIsEmpty(tilesArray, num) {
  // 4 Check to see if a choice is in tile
  // 4.1 IF tile is empty
  // 4.2 THEN place choice inside tile
  // 4.3 ELSE player chooses tile again
  if (tilesArray[num] == null) {
    console.log("Tile is EMPTY!");
    return true;
    // tiles.splice(tileChoice, 1, choice);
  } else {
    console.log("Tile is NOT empty. Choose again.");
    return false;
  }
}

// 5 Player places choice inside chosen tile
function populateTiles(gameboard, tiles, num) {
  let choice = gameboard.choosePlayer();
  tiles.splice(tiles[num], 1, choice);
  console.log(tiles);
  return tiles;
}
// 6 Check to see if 3 in a row of said choice
// 6.1 IF there is 3 in a row
// 6.2 THEN player wins and game ends!
// 6.3 ELSE its other players turn

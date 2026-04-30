// 1.Generate gameboard 3x3

function renderGame() {
  let gameboard = {
    counter: undefined,
    tiles: [null, null, null, null, null, null, null, null, null],
    players: { player1: "X", player2: "O" },
    // 2.Player chooses choices X or O
    choosePlayer() {
      let choice;

      if (this.counter == undefined) {
        // User chooses player type
        this.counter = 1;
      }

      if (this.counter == 1) {
        choice = this.players.player1;
        this.counter = 2;
      } else {
        choice = this.players.player2;
        this.counter = 1;
      }
      return choice;
    },
    // 5 Player places choice inside chosen tile
    populateTiles() {
      let choice = gameboard.choosePlayer();
      this.tiles.splice(chooseTile(gameboard), 1, choice);
      console.log(this.tiles[0], this.tiles[1], this.tiles[2]);
      console.log(this.tiles[3], this.tiles[4], this.tiles[5]);
      console.log(this.tiles[6], this.tiles[7], this.tiles[8]);

      if (
        //horizontal tiles
        check3InARow(this.tiles, [0, 1, 2], choice) == true ||
        check3InARow(this.tiles, [3, 4, 5], choice) == true ||
        check3InARow(this.tiles, [6, 7, 8], choice) == true ||
        //vertical tiles
        check3InARow(this.tiles, [0, 3, 6], choice) == true ||
        check3InARow(this.tiles, [1, 4, 7], choice) == true ||
        check3InARow(this.tiles, [2, 5, 8], choice) == true ||
        //diagonal tiles
        check3InARow(this.tiles, [0, 4, 8], choice) == true ||
        check3InARow(this.tiles, [2, 4, 6], choice) == true
      ) {
        console.log(`${choice} has won!`);
      } else {
        // this.populateTiles();
      }
    },
  };
  gameboard.populateTiles();
  return gameboard;
}
renderGame();

function chooseTile(gameboard) {
  let tilesArray = gameboard.tiles;

  // 0-9
  // 3.Player chooses which tile to place choice
  // let promptNum = prompt("Pick a tile #1-9");
  let num = handleTileClick(tilesArray);

  let empty = checkTilesIsEmpty(tilesArray, num);

  if (num >= 0 && num < 9 && empty == true) {
    console.log(`You chose Tile #${num + 1}!`);
    return num;
  } else {
    console.log("ERROR: tile choice is invalid.");
    // chooseTile(gameboard);
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
  } else {
    console.log("Tile is NOT empty. Choose again.");
    return false;
  }
}

// 6 Check to see if 3 in a row of said choice
function check3InARow(tilesArray, numArray, choice) {
  // 6.1 IF there is 3 in a row
  // 6.2 THEN player wins and game ends!
  if (
    tilesArray[numArray[0]] == choice &&
    tilesArray[numArray[1]] == choice &&
    tilesArray[numArray[2]] == choice
  ) {
    console.log("3 IN A ROW!!!");
    return true;
  } else {
    // 6.3 ELSE its other players turn
    return false;
  }
}

function handleTileClick(tilesArray) {
  // 1. click tile
  let clickTilesArray = document.querySelectorAll(".tiles-container > div");
  for (let item of clickTilesArray) {
    item.addEventListener("click", function (e) {
      // If tile is empty then place 'choice' inside tile
      if (item.innerHTML == null) {
        console.log("indexOf:", item.indexOff(e));
        return item.indexOf(e);
      }
    });
  }
  // 2. populate Tile with choice
  // 3. Next players turn
}

// *** Notes For the Future ***
//

// 1.Generate gameboard 3x3

function renderGame() {
  let gameboard = {
    counter: 0,
    tiles: [null, null, null, null, null, null, null, null, null],
    players: { player1: "X", player2: "O" },
    // 2.Player chooses choices X or O
    choosePlayer() {
      console.log("counter 1", this.counter);

      let choice;

      if (this.counter == 0) {
        // User chooses player type
        this.counter = 1;
      }

      if (this.counter == 1) {
        choice = this.players.player1;
        this.counter = 2;
        console.log("counter 2", this.counter);
      } else {
        choice = this.players.player2;
        this.counter = 1;
      }

      return choice;
    },
    // 5 Player places choice inside chosen tile
    populateTiles(index, clickArray) {
      let choice = gameboard.choosePlayer();
      this.tiles.splice(chooseTile(gameboard, index), 1, choice);

      //Change tile html to choice
      clickArray[index].innerHTML = choice;

      console.log(this.tiles[0], this.tiles[1], this.tiles[2]);
      console.log(this.tiles[3], this.tiles[4], this.tiles[5]);
      console.log(this.tiles[6], this.tiles[7], this.tiles[8]);

      if (
        //horizontal tiles
        check3InARow(this.tiles, [0, 1, 2], choice, clickArray) == true ||
        check3InARow(this.tiles, [3, 4, 5], choice, clickArray) == true ||
        check3InARow(this.tiles, [6, 7, 8], choice, clickArray) == true ||
        //vertical tiles
        check3InARow(this.tiles, [0, 3, 6], choice, clickArray) == true ||
        check3InARow(this.tiles, [1, 4, 7], choice, clickArray) == true ||
        check3InARow(this.tiles, [2, 5, 8], choice, clickArray) == true ||
        //diagonal tiles
        check3InARow(this.tiles, [0, 4, 8], choice, clickArray) == true ||
        check3InARow(this.tiles, [2, 4, 6], choice, clickArray) == true
      ) {
        console.log(`${choice} has won!`);
        // Clear tiles and tiles innerHTML
        this.tiles = clearTiles(gameboard.tiles);
        clearHTML(clickArray);
      } else {
      }
    },
  };

  // handleTileClick();
  return gameboard;
}
renderGame();

function chooseTile(gameboard, index) {
  let tilesArray = gameboard.tiles;

  // 0-9
  // 3.Player chooses which tile to place choice
  // let promptNum = prompt("Pick a tile #1-9");
  // let num = handleTileClick(tilesArray);

  if (index >= 0 && index < 9) {
    console.log(`You chose Tile #${index + 1}!`);
    return index;
  } else {
    console.log("ERROR: tile choice is invalid.");
    // chooseTile(gameboard);
  }
}

function checkTilesIsEmpty(clickArray, index) {
  // 4 Check to see if a choice is in tile
  // 4.1 IF tile is empty
  // 4.2 THEN place choice inside tile
  // 4.3 ELSE player chooses tile again
  if (clickArray[index].innerHTML == "") {
    console.log("Tile is EMPTY!");
    return true;
  } else {
    console.log("Tile is NOT empty. Choose again.");
    return false;
  }
}

// 6 Check to see if 3 in a row of said choice
function check3InARow(tilesArray, numArray, choice, clickArray) {
  // 6.1 IF there is 3 in a row
  // 6.2 THEN player wins and game ends!
  if (
    tilesArray[numArray[0]] == choice &&
    tilesArray[numArray[1]] == choice &&
    tilesArray[numArray[2]] == choice
  ) {
    console.log("3 IN A ROW!!!");

    highlightTiles(numArray, clickArray);
    return true;
  } else {
    // 6.3 ELSE its other players turn
    return false;
  }
}

function highlightTiles(numArray, clickArray) {
  for (let i = 0; i < 3; i++) {
    console.log(clickArray[numArray[i]]);
    clickArray[numArray[i]].classList.add("highlight");
  }
}

function handleTileClick() {
  // 1. click tile
  let clickNodeList = document.querySelectorAll(".tiles-container > div");
  let clickArray = Array.from(clickNodeList);
  let empty;
  let obj = renderGame();

  for (let item of clickArray) {
    item.addEventListener("click", function (e) {
      index = clickArray.indexOf(e.target);
      empty = checkTilesIsEmpty(clickArray, index);
      // If tile is empty then place 'choice' inside tile
      if (empty == true) {
        obj.populateTiles(index, clickArray);
      }
    });
  }
  return clickArray;

  // 2. populate Tile with choice
  // 3. Next players turn
}
handleTileClick();

function clearTiles() {
  return [null, null, null, null, null, null, null, null, null];
}

function clearHTML(clickArray) {
  for (let item of clickArray) {
    item.innerHTML = "";
  }
}

// *** Notes For the Future ***
// - center gameboard
// - highlight the tiles that are 3 in a row

// *** Finished ***
// - center gameboard

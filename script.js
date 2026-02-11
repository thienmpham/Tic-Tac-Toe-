function gameboard() {
  let gameboard = {
    tiles: [],
    playerChoice: ["x", "o"],
    setTileLimit() {
      //tiles no more than 9
      if (this.tiles.length < 9) {
      }
    },
  };

  console.log(gameboard.tiles.row1);
}
gameboard();

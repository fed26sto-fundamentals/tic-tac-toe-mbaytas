const Gameboard = (function () {
  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
})();

const createPlayer = (name, mark) => {
  return { name, mark };
};

const gameController = (function () {
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
})();

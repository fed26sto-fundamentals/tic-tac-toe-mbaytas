const Gameboard = (function () {
  const gameboard = Array(9).fill("");

  function checkWin(mark) {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ].some((winningCombination) =>
      winningCombination.every((index) => gameboard[index] === mark)
    );
  }

  function checkTie() {
    return gameboard.every((cell) => cell !== "");
  }

  function setCell(index, mark) {
    gameboard[index] = mark;
  }

  function resetCells() {
    gameboard.fill("");
  }

  function render() {
    console.log(gameboard);
  }

  return {
    checkWin,
    checkTie,
    setCell,
    resetCells,
    render,
  };
})();

const GameController = (function () {
  const players = Array(2);
  let currentPlayerIdx = 0;
  let gameOn = false;

  function createPlayer(name, mark) {
    return { name, mark };
  }

  function startGame() {
    players[0] = createPlayer("Player 1", "X");
    players[1] = createPlayer("Player 2", "O");

    Gameboard.resetCells();
    Gameboard.render();

    currentPlayerIdx = 0;
    gameOn = true;

    playGame();
  }

  function playRound(player) {
    const index = prompt(`${player.name}, enter your move (0-8):`);
    if (index === null) return false;

    Gameboard.setCell(index, player.mark);
    Gameboard.render();

    return true;
  }

  function switchPlayer() {
    currentPlayerIdx = (currentPlayerIdx + 1) % 2;
  }

  function playGame() {
    while (true) {
      const player = players[currentPlayerIdx];
      
      const round = playRound(player);

      if (!round) {
        console.log("Game terminated!");
        return;
      }

      if (Gameboard.checkWin(player.mark)) {
        console.log(`${player.name} wins!`);
        return;
      }

      if (Gameboard.checkTie()) {
        console.log("It's a tie!");
        return;
      }

      switchPlayer();
    }
  }

  return {
    startGame,
  };
})();

import dom from "../dom.js";

const restartGame = (gameState, currentPlayer, gameActive) => {
    gameActive = true;
    currentPlayer = 'X';
    gameState.fill('');
    dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.innerHTML = '');
};

export default restartGame;

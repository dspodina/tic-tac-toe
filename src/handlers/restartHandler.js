import dom from "../dom.js";

const restartGame = (gameState, currentPlayer, gameActive) => {
    gameActive = true;
    currentPlayer = 'X';
    gameState.fill('');
    dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    dom.cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.color = 'black'; 
    });
    return { gameState, currentPlayer, gameActive };
};

export default restartGame;


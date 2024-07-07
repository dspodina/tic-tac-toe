import handleCellPlayed from "../handlers/handleCellPlayed.js";
import handleResult from "../handlers/resultHandler.js";
import handlePlayerChange from "../handlers/handlePlayerChange.js";

const handleCellClick = (event, gameState, currentPlayer, gameActive) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] || !gameActive) return { gameActive, currentPlayer };

    handleCellPlayed(clickedCell, clickedCellIndex, gameState, currentPlayer);
    gameActive = handleResult(gameState, currentPlayer, gameActive);

    if (gameActive) {
        currentPlayer = handlePlayerChange(currentPlayer);
    }

    return { gameActive, currentPlayer };
};

export default handleCellClick;
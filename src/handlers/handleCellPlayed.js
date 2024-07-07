const handleCellPlayed = (clickedCell, clickedCellIndex, gameState, currentPlayer) => {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.style.color = currentPlayer === 'X' ? 'red' : 'black';
};

export default handleCellPlayed;
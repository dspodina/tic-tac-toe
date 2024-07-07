const playBoard = () => {
    const gameBoard = document.createElement('div');
    gameBoard.id = "game-board";

    for (let i = 0; i < 9; i++) {
        const gameCell = document.createElement('div');
        gameCell.classList.add('cell');
        gameCell.setAttribute('data-index', i.toString());
        gameBoard.appendChild(gameCell);
    }

    return gameBoard;
};

export default playBoard;

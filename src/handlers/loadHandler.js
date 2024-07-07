import dom from "../dom.js";
import playBoard from "../components/playBoard.js";
import resetBtn from "../components/resetBtn.js";
import handleCellClick from "./handleCellClick.js";
import restartGame from "./restartHandler.js";

const loadHandler = () => {
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X'; 
    let gameActive = true;

    const gameBoard = playBoard();
    const button = resetBtn();
    dom.container.innerHTML = ''; 
    dom.container.append(gameBoard, button);

    const cells = gameBoard.querySelectorAll('.cell'); 
    cells.forEach(cell => cell.addEventListener('click', (event) => {
        const result = handleCellClick(event, gameState, currentPlayer, gameActive);
        gameActive = result.gameActive;
        currentPlayer = result.currentPlayer;
    }));

    button.addEventListener('click', () => {
        restartGame(gameState, currentPlayer, gameActive);
    });

    dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
};

export default loadHandler;

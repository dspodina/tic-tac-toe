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
    dom.container.append(gameBoard, button);

    const addCellClickListeners = () => {
        dom.cells.forEach(cell => cell.addEventListener('click', (event) => {
            const result = handleCellClick(event, gameState, currentPlayer, gameActive);
            gameActive = result.gameActive;
            currentPlayer = result.currentPlayer;
            if (gameActive) {
                dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
            }
        }));
    };

    addCellClickListeners();

    button.addEventListener('click', () => {
        const restartResult = restartGame(gameState, currentPlayer, gameActive);
        gameState = restartResult.gameState;
        currentPlayer = restartResult.currentPlayer;
        gameActive = restartResult.gameActive;
        dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
        addCellClickListeners(); 
    });

    dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
};

export default loadHandler;
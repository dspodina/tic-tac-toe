import dom from "../dom.js";

const handlePlayerChange = (currentPlayer) => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    dom.statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    return currentPlayer; 
};

export default handlePlayerChange;

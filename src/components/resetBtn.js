const resetBtn = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = "restart-btn";
    button.innerText = "New game";
    
    return button;
};

export default resetBtn;

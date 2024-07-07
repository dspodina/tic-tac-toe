const dom = {
    container: document.getElementById("container"),
    statusDisplay: document.getElementById('status'),
    restartButton: document.getElementById('restart-btn'),
    get cells() {
        return document.querySelectorAll('.cell')
    }
};

export default dom;
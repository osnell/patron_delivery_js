var canvas, canvasContext;

const fps = 60;

var car = new Car('jarvis', null);
var terrain = new Terrain();

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setupKeyInput();
    startGame();

};

function updateModel() {
    car.move();
}
function updateDraw() {
    terrain.draw();
    car.draw();
}

function startGame() {

    setInterval(function () {
        updateModel();
        updateDraw();
    }, 1000/fps);

}
var canvas, canvasContext;

const fps = 60;
const NUM_TILE_WIDTH = 12;
const NUM_TILE_HEIGHT = 12;
var car = new Car('jarvis', null);
var terrain = new Terrain(NUM_TILE_WIDTH, NUM_TILE_HEIGHT);

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    terrain.createTiles();
    setupKeyInput();
    setupMouseInput();
    startGame();

};

function updateModel() {
    car.move();
}

//Add these for debuging, show tile position on mouse move
//Math.floor(mouseX / TILE_WIDTH)
//Math.floor(mouseY / TILE_HEIGHT)
function updateDraw() {
    terrain.draw();
    car.draw();
    colorText(mouseX, mouseY, "("+Math.floor(mouseX / 120)+", "+Math.floor(mouseY / 80)+")", 12, 'white');
}

function startGame() {

    setInterval(function () {
        updateModel();
        updateDraw();
    }, 1000/fps);

}
const TILE_WIDTH = 120;
const TILE_HEIGHT = 80;


function Terrain() {
    var tiles = new Array(12);
    for (var i=0; i<tiles.length; i++){
        tiles[i] = new Array(8);
    }

    this.draw = function () {
        drawRect(0,0, canvas.width, canvas.height, 'black');
        drawRect(200,200, 20, 10, 'blue');
    }
}


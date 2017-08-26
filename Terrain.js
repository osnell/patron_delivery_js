
function Terrain(width, height) {
    this.width = width; //Number of Tiles
    this.height = height; //Number of Tiles

    var tiles = new Array(this.width * this.height);

    this.createTiles = function () {
        var index = 0;
        for(var i = 0; i<this.width; i++){
            for (var j = 0; j<this.height; j++){
                tiles[index] = new Tile(i, j, 'red');
                index++;
            }
        }
    };
    this.drawTiles = function () {
        tiles.forEach(function (item) {
            item.draw();
        })
    };
    this.draw = function () {
        drawRect(0,0, canvas.width, canvas.height, 'black');
        this.drawTiles();
    };
}


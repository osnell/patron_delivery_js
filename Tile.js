const TILE_WIDTH = 120;
const TILE_HEIGHT = 80;
const TILE_SEP = 2;

function Tile(col, row, type) {
    this.col = col;
    this.row = row;
    this.type = type;

    this.draw = function () {
        drawRect((this.row * TILE_WIDTH), this.col * TILE_HEIGHT, TILE_WIDTH-TILE_SEP, TILE_HEIGHT-TILE_SEP, this.type);
    }
}
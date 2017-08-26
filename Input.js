const KEYLEFT  = 37;
const KEYUP    = 38;
const KEYRIGHT = 39;
const KEYDOWN  = 40;

var mouseX=0, mouseY=0;

function keyEventContext(evt, context){
    if(evt.keyCode === KEYUP){
        car.keyHeldGas = context
    }
    else if(evt.keyCode === KEYDOWN){
        car.keyHeldReverse = context
    }
    else if(evt.keyCode === KEYLEFT){
        car.keyHeldTurnLeft = context
    }
    else if(evt.keyCode === KEYRIGHT){
        car.keyHeldTurnRight = context
    }
}

function handleKeyPress(evt) {
    keyEventContext(evt, true);
}
function handleKeyRelease(evt) {
    keyEventContext(evt, false);
}

function setupKeyInput() {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyRelease);
}

function setupMouseInput() {
    canvas.addEventListener('mousemove', handleMouseMove);

}
function handleMouseMove(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top  - root.scrollTop;

}
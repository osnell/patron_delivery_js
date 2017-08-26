const ACC = 0.25;
const DAMPEN = 0.98;
const CAR_LENGTH = 10;
const CAR_WIDTH = 40;
const TURNING_ANGLE = 0.075;

function Car(name, sprite){
    this.name = name;
    this.sprite = sprite;

    this.x = 0;
    this.y = 0;
    this.speed = 0.0;
    this.angle = 0.0;

    this.keyHeldGas = false;
    this.keyHeldReverse = false;
    this.keyHeldTurnLeft = false;
    this.keyHeldTurnRight = false;

    this.setKeysFalse = function () {
        this.keyHeldGas = false;
        this.keyHeldReverse = false;
        this.keyHeldTurnLeft = false;
        this.keyHeldTurnRight = false;
    };

    this.move = function () {

        this.speed = this.speed * DAMPEN;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.keyHeldGas){
            this.speed += ACC;
        }
        if (this.keyHeldReverse){
            this.speed -= ACC;
        }
        if (this.keyHeldTurnLeft){
            this.angle -= TURNING_ANGLE;
        }
        if (this.keyHeldTurnRight){
            this.angle += TURNING_ANGLE;
        }
    };

    this.draw = function () {
        drawRectWithRotation(this.x, this.y, this.angle)
    };
}


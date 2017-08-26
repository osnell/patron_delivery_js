function drawRect(topLeftX,topLeftY,width,height,color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(topLeftX,topLeftY,width,height);
}
function colorCircle(centerX,centerY, radius, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}
function colorText(textX,textY,text,size,color){
    canvasContext.font = size+"px Arial";
    canvasContext.fillStyle = color;
    canvasContext.fillText(text,textX,textY);
}
function drawBitMapWithRotation(useBitmap,atX,atY,withAng){
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap,-useBitmap.width/2,-useBitmap.height/2);
    canvasContext.restore();
}
function drawRectWithRotation(atX,atY,withAng) {
    canvasContext.save();
    canvasContext.beginPath();
    canvasContext.translate(atX+CAR_WIDTH/2, atY+CAR_LENGTH/2);
    canvasContext.rotate(withAng);
    drawRect(-CAR_WIDTH/2, -CAR_LENGTH/2, CAR_WIDTH, CAR_LENGTH, 'pink');
    canvasContext.restore();
}
function clearScreen(){
    drawRect(0,0, canvas.width,canvas.height,'black');
}
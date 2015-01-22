/**
 * Created by jayeshkawli on 1/18/15.
 */
/* Ref http://codepen.io/chriscoyier/pen/Kkliq */

var ctx, radiusOfClock, clockCenterX, clockCenterY;
var clockComponentsAlpha = 1.0;
var hourHandRadius, minuteHandRadius, secondHandRadius;
var canvas;

function resetCanvasView() {
    canvas = document.getElementById('color-gradient-canvas');
    var winMin = Math.min(window.innerWidth,window.innerHeight);
    canvas.width = winMin;
    canvas.height = winMin*0.65;
    ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'screen';

    //Create a dot at the center of circle
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2 ,5, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    //Create big circle centered on the screen
    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.beginPath();
    ctx.arc(clockCenterX,clockCenterY,radiusOfClock, 0, Math.PI*2, true);
    ctx.lineWidth = 5;
    ctx.closePath();
    ctx.stroke();
}

function setupCanvasView() {
    radiusOfClock = ((canvas.height/2)-10);
    hourHandRadius =  9*(radiusOfClock/32);
    minuteHandRadius =  3*(radiusOfClock/8);
    secondHandRadius = (radiusOfClock/2);
    clockCenterX = canvas.width/2;
    clockCenterY = (canvas.height/2) + 5;
}

/* globalCompositeOperation :
 normal | multiply | screen | overlay |
 darken | lighten | color-dodge | color-burn | hard-light |
 soft-light | difference | exclusion | hue | saturation |
 color | luminosity
 */

function drawCanvasElements() {
    var emptyTimeValueArray = [0, 0, 0];
    updateSecondHand(emptyTimeValueArray);
}




function updateSecondHand(timeArray) {
    resetCanvasView();

    var secondHandAngle = 6*timeArray[2];
    var secondAngleInRadian = -convertDegreeToRadian(secondHandAngle);

    var minuteHandAngle = 6 * timeArray[1] + 0.1 * timeArray[2];
    console.log("minute hand angle " + 6 * timeArray[1] + " " + (0.1 * timeArray[2]));
    var minuteAngleInRadian = -convertDegreeToRadian(minuteHandAngle);

    var hourHandAngle = 0.5*(60*(timeArray[0]%12) + parseInt(timeArray[1]));
    var hourAngleInRadian = -convertDegreeToRadian(hourHandAngle);

    var newSecondHandXPosition = secondHandRadius * Math.sin(secondAngleInRadian);
    var newSecondHandYPosition = secondHandRadius * Math.cos(secondAngleInRadian);

    var newMinuteHandXPosition = minuteHandRadius * Math.sin(minuteAngleInRadian);
    var newMinuteHandYPosition = minuteHandRadius * Math.cos(minuteAngleInRadian);

    var newHourHandXPosition = secondHandRadius * Math.sin(hourAngleInRadian);
    var newHourHandYPosition = secondHandRadius * Math.cos(hourAngleInRadian);

    //Blue - Second Hand
    ctx.fillStyle = 'rgba(0,0,255,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX - newSecondHandXPosition, clockCenterY - newSecondHandYPosition, secondHandRadius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    //Green - Minute Hand
    ctx.fillStyle = 'rgba(0,255,0,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX - newMinuteHandXPosition, clockCenterY - newMinuteHandYPosition,minuteHandRadius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    //Red - Hour Hand
    ctx.fillStyle = 'rgba(255,0,0,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX - newHourHandXPosition, clockCenterY - newHourHandYPosition,hourHandRadius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function convertDegreeToRadian(angleInDegree) {
    return (angleInDegree * (Math.PI/180));
}

resetCanvasView();
setupCanvasView();
drawCanvasElements();

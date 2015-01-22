/**
 * Created by jayeshkawli on 1/18/15.
 */
/* Ref http://codepen.io/chriscoyier/pen/Kkliq */

var ctx, radiusOfClock, clockCenterX, clockCenterY;
var clockComponentsAlpha = 1.0;

function setupCanvasView() {
    var canvas = document.getElementById('color-gradient-canvas');
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
    radiusOfClock = ((canvas.height/2)-10);
    clockCenterX = canvas.width/2;
    clockCenterY = (canvas.height/2) + 5;

    ctx.arc(clockCenterX,clockCenterY,radiusOfClock, 0, Math.PI*2, true);
    ctx.lineWidth = 5;
    ctx.closePath();
    ctx.stroke();
}

/* globalCompositeOperation :
 normal | multiply | screen | overlay |
 darken | lighten | color-dodge | color-burn | hard-light |
 soft-light | difference | exclusion | hue | saturation |
 color | luminosity
 */

function drawCanvasElements() {
    var emptyTimeValueArray = [0, 0, 0];
    updateHourHand(emptyTimeValueArray);
    updateMinuteHand(emptyTimeValueArray);
    updateSecondHand(emptyTimeValueArray);
}

function updateHourHand(timeArray) {
    //Red - Hour Hand
    var hourHandAngle = 0.5*(60*(timeArray[0]%12) + parseInt(timeArray[1]));
    var handAngleInRadian = convertDegreeToRadian(hourHandAngle);

    ctx.fillStyle = 'rgba(255,0,0,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), 9*(radiusOfClock/32), 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function updateMinuteHand(timeArray) {
    //Green - Minute Hand
    var minuteHandAngle = 6 * timeArray[1];
    var minuteAngleInRadian = convertDegreeToRadian(minuteHandAngle);

    ctx.fillStyle = 'rgba(0,255,0,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), 3*(radiusOfClock/8), 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function updateSecondHand(timeArray) {
    //Blue - Second Hand
    var secondHandAngle = 6*timeArray[2];
    var secondAngleInRadian = convertDegreeToRadian(secondHandAngle);

    ctx.fillStyle = 'rgba(0,0,255,'+ clockComponentsAlpha +')';
    ctx.beginPath();
    ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), radiusOfClock/2, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function convertDegreeToRadian(angleInDegree) {
    return (angleInDegree * (Math.PI/180));
}

setupCanvasView();
drawCanvasElements();

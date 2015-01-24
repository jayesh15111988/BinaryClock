/**
 * Created by jayeshkawli on 1/18/15.
 */
/* Ref http://codepen.io/chriscoyier/pen/Kkliq */

var ctx, radiusOfClock, clockCenterX, clockCenterY;
var clockComponentsAlpha = 1.0;
var hourHandRadius, minuteHandRadius, secondHandRadius;
var canvas;
var toDrawClockLines = true;
var defaultClockHandColor = "rgb(255,255,255)";
var circleAngleMultiplier = 2;
var isDefaultColorModel = true;
var colorModel = "RGB"; //Default model is RGB, alternate model is CMY
var colorModelsMetadata = {"RGB" : {composition : "screen", "first" : "(255,0,0)", "second" : "(0,255,0)", "third" : "(0,0,255)"}
                          ,"CMY" : {composition : "multiply", "first" : "(255,255,0)", "second" : "(0,255,255)", "third" : "(255,0,255)"}}; //Actually order is like YCM

function resetCanvasView() {
    canvas = document.getElementById('color-gradient-canvas');
    var winMin = Math.min(window.innerWidth,window.innerHeight);
    canvas.width = winMin;
    canvas.height = winMin*0.65;
    ctx = canvas.getContext('2d');
    //Screen if using RGB model
    ctx.globalCompositeOperation = colorModelsMetadata[colorModel].composition;

    //Create a dot at the center of circle

    addCircleWithParameters('rgb(255,255,255)', (canvas.width/2), (canvas.height/2), 5);

    //Create big circle centered on the screen
    addOuterCircle("rgb(255,255,255)","rgba(0,0,0,0)",radiusOfClock, clockCenterX, clockCenterY);
}

function addOuterCircle(strokeColor, fillColor, radius, centerX, centerY) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
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
    var minuteAngleInRadian = -convertDegreeToRadian(minuteHandAngle);

    var hourHandAngle = 0.5*(60*(timeArray[0]%12) + parseInt(timeArray[1]));
    var hourAngleInRadian = -convertDegreeToRadian(hourHandAngle);

    var newSecondHandXPosition = secondHandRadius * Math.sin(secondAngleInRadian);
    var newSecondHandYPosition = secondHandRadius * Math.cos(secondAngleInRadian);

    var newMinuteHandXPosition = minuteHandRadius * Math.sin(minuteAngleInRadian);
    var newMinuteHandYPosition = minuteHandRadius * Math.cos(minuteAngleInRadian);

    var newHourHandXPosition = hourHandRadius * Math.sin(hourAngleInRadian);
    var newHourHandYPosition = hourHandRadius * Math.cos(hourAngleInRadian);

    //Red - Second Hand
    //Yellow
    addCircleWithParameters('rgb'+colorModelsMetadata[colorModel].first,(clockCenterX - newSecondHandXPosition),(clockCenterY - newSecondHandYPosition),secondHandRadius);

    //Green - Minute Hand
    //cyan
    addCircleWithParameters('rgb'+colorModelsMetadata[colorModel].second,(clockCenterX - newMinuteHandXPosition),( clockCenterY - newMinuteHandYPosition),minuteHandRadius)

    //Blue - Hour Hand
    //Magenta
    addCircleWithParameters('rgb'+colorModelsMetadata[colorModel].third, (clockCenterX - newHourHandXPosition), (clockCenterY - newHourHandYPosition), hourHandRadius);

    if(toDrawClockLines == true) {
        //Draw line on second hand to indicate its position
        addLineWithParameters(defaultClockHandColor, (clockCenterX - newSecondHandXPosition*2), (clockCenterY - newSecondHandYPosition*2));
        addLineWithParameters(defaultClockHandColor, (clockCenterX - 2*newMinuteHandXPosition), (clockCenterY - 2*newMinuteHandYPosition));
        addLineWithParameters(defaultClockHandColor,(clockCenterX - 2*newHourHandXPosition), (clockCenterY - 2*newHourHandYPosition));
    }
}

function addCircleWithParameters(circleColor, xCenterValue, yCenterValue, radius) {
    ctx.fillStyle = circleColor
    ctx.beginPath();
    ctx.arc(xCenterValue, yCenterValue,radius, 0, Math.PI*circleAngleMultiplier, true);
    ctx.closePath();
    ctx.fill();
}

function addLineWithParameters(lineColor, destinationX, destinationY) {
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(clockCenterX, clockCenterY);
    ctx.lineTo(destinationX,destinationY);
    ctx.stroke();
}

function convertDegreeToRadian(angleInDegree) {
    return (angleInDegree * (Math.PI/180));
}

$(document).ready(function() {

    $("#shape-changer").click(function(){
       circleAngleMultiplier = (circleAngleMultiplier == 2) ? 1 : 2;
    });

    $("#hand-drawer").click(function(){
       toDrawClockLines = !toDrawClockLines;
    });

    $("#color-scheme-adjust-button" ).click(function() {
        isDefaultColorModel = !isDefaultColorModel;

        if(isDefaultColorModel) {
            colorModel = "RGB";
            $(this).html("Change to CMY Model");
        }
        else {
            colorModel = "CMY";
            $(this).html("Change to RGB Model");
        }

    });
});
resetCanvasView();
setupCanvasView();
drawCanvasElements();

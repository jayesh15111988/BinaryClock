/**
 * Created by jayeshkawli on 1/18/15.
 */
/* Ref http://codepen.io/chriscoyier/pen/Kkliq */

var canvas = document.getElementById('color-gradient-canvas');

var winMin = Math.min(window.innerWidth,window.innerHeight);

canvas.width = winMin;
canvas.height = winMin*0.65;

var ctx = canvas.getContext('2d');

/* globalCompositeOperation :
 normal | multiply | screen | overlay |
 darken | lighten | color-dodge | color-burn | hard-light |
 soft-light | difference | exclusion | hue | saturation |
 color | luminosity
 */
ctx.globalCompositeOperation = 'screen';

//Create big circle centered on the screen
ctx.strokeStyle = 'rgb(255,255,255)';
ctx.beginPath();
var radiusOfClock = ((canvas.height/2)-10);
var clockCenterX = canvas.width/2;
var clockCenterY = (canvas.height/2) + 5;
var clockComponentsAlpha = 1.0;

ctx.arc(clockCenterX,clockCenterY,radiusOfClock, 0, Math.PI*2, true);
ctx.lineWidth = 5;
ctx.closePath();
ctx.stroke();

console.log("radius of big circle " + (canvas.height/2)-10);
//Create a dot at the center of circle
ctx.fillStyle = 'rgb(255,255,255)';
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2 ,5, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//red - Hour Hand
ctx.fillStyle = 'rgba(255,0,0,'+ clockComponentsAlpha +')';
ctx.beginPath();
ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), 9*(radiusOfClock/32), 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//green - Minute Hand
ctx.fillStyle = 'rgba(0,255,0,'+ clockComponentsAlpha +')';
ctx.beginPath();
ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), 3*(radiusOfClock/8), 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//blue - Second Hand
ctx.fillStyle = 'rgba(0,0,255,'+ clockComponentsAlpha +')';
ctx.beginPath();
ctx.arc(clockCenterX, clockCenterY - (radiusOfClock/2), radiusOfClock/2, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();


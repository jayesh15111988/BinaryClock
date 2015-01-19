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
ctx.arc(canvas.width/2,(canvas.height/2) + 5,(canvas.height/2)-10, 0, Math.PI*2, true);
ctx.lineWidth = 5;
ctx.closePath();
ctx.stroke();

//Create a dot at the center of circle
ctx.fillStyle = 'rgb(255,255,255)';
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,5, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//red - Hour Hand
ctx.fillStyle = 'rgb(255,0,0)';
ctx.beginPath();
ctx.arc(100, 100, 25, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//green - Minute Hand
ctx.fillStyle = 'rgb(0,255,0)';
ctx.beginPath();
ctx.arc(100, 150, 50, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();

//blue - Second Hand
ctx.fillStyle = 'rgb(0,0,255)';
ctx.beginPath();
ctx.arc(100, 200, 75, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
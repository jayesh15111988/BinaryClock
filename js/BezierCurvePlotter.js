/**
 * Created by jayeshkawli on 1/23/15.
 */


//function updateTimeForBezierCurve(timeStringArrayRepresentation) {

//}
//Change registerEvents to true if we want user to interact with graph
var brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[0,90,90,0],keepaspectratio:true,axis:true, registerEvents: false});

var p = [], l = [], m= [];

brd.suspendUpdate();
col = 'red';
p.push(brd.createElement('point',[12,20],{strokeColor:col,fillColor:col}));        // data point
col = 'blue';
p.push(brd.createElement('point',[50,20],{strokeColor:col,fillColor:col}));   // control point
p.push(brd.createElement('point',[15,20],{strokeColor:col,fillColor:col}));   // control point

col = 'red';
p.push(brd.createElement('point',[30,20],{strokeColor:col,fillColor:col}));       // data point


l.push(brd.createElement('segment',[p[0],p[1]],{strokeOpacity:0.5}));
l.push(brd.createElement('segment',[p[1],p[2]],{strokeOpacity:0.5}));
l.push(brd.createElement('segment',[p[2],p[3]],{strokeOpacity:0.5}));

col = 'black';
m.push(brd.createElement('midpoint',[l[0]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));
m.push(brd.createElement('midpoint',[l[1]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));
m.push(brd.createElement('midpoint',[l[2]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

l.push(brd.createElement('segment',[m[0],m[1]],{strokeOpacity:0.5}));
l.push(brd.createElement('segment',[m[1],m[2]],{strokeOpacity:0.5}));

m.push(brd.createElement('midpoint',[l[3]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));
m.push(brd.createElement('midpoint',[l[4]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

l.push(brd.createElement('segment',[m[3],m[4]],{strokeOpacity:0.5}));
m.push(brd.createElement('midpoint',[l[5]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));


var c = brd.createElement('curve', JXG.Math.Numerics.bezier(p), {strokecolor:'blue', strokeOpacity:0.6, strokeWidth:5});
brd.unsuspendUpdate();
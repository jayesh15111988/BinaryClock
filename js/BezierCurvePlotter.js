/**
 * Created by jayeshkawli on 1/23/15.
 */

// Change registerEvents to true if we want user to interact with graph
// This Bezier curve is the courtesy of graph library http://jsxgraph.uni-bayreuth.de/wp/


var brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-10, 100, 100, -10],keepaspectratio: false, axis: true, registerEvents: false});

function updateBezierCurveWithSplitTime(hoursFirstPart, hoursSecondPart, minutesFirstPart, minutesSecondPart, secondsFirstPart, secondsSecondPart) {

    JXG.JSXGraph.freeBoard(brd);
    brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-10, 100, 100, -10],keepaspectratio: false, axis: true, registerEvents: false});
    var p = [], l = [], m= [];

    brd.suspendUpdate();

    col = 'black';
    var currentDate = new Date();
    var currentDayValue = currentDate.getDate();
    p.push(brd.createElement('point', [parseInt(currentDayValue/10)*10, (currentDayValue%10)*10], {strokeColor: col, fillColor: col, name : 'Date : ' + currentDayValue}));

    col = 'blue';
    p.push(brd.createElement('point',[getTransformedValueOfTimeComponent(hoursFirstPart), getTransformedValueOfTimeComponent(hoursSecondPart)],{strokeColor:col,fillColor:col,name: 'Hours : ' + hoursFirstPart + hoursSecondPart}));        // data point

    col = 'green'
    p.push(brd.createElement('point',[getTransformedValueOfTimeComponent(minutesFirstPart), getTransformedValueOfTimeComponent(minutesSecondPart)],{strokeColor:col,fillColor:col, name : 'Minutes : ' + minutesFirstPart + minutesSecondPart}));   // control point

    col = 'red';
    p.push(brd.createElement('point',[getTransformedValueOfTimeComponent(secondsFirstPart), getTransformedValueOfTimeComponent(secondsSecondPart)],{strokeColor:col,fillColor:col, name : 'Seconds : ' + secondsFirstPart + secondsSecondPart}));       // data point

    l.push(brd.createElement('segment',[p[0],p[1]],{strokeOpacity:0.5}));
    l.push(brd.createElement('segment',[p[1],p[2]],{strokeOpacity:0.5}));
    l.push(brd.createElement('segment',[p[2],p[3]],{strokeOpacity:0.5}));

    col = '#002456';
    m.push(brd.createElement('midpoint',[l[0]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));
    col = '#006456';
    m.push(brd.createElement('midpoint',[l[1]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));
    col = '#804000'
    m.push(brd.createElement('midpoint',[l[2]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

    l.push(brd.createElement('segment',[m[0],m[1]],{strokeOpacity:0.5}));
    l.push(brd.createElement('segment',[m[1],m[2]],{strokeOpacity:0.5}));

    col = "#002456"
    m.push(brd.createElement('midpoint',[l[3]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

    col = "#006456"
    m.push(brd.createElement('midpoint',[l[4]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

    l.push(brd.createElement('segment',[m[3],m[4]],{strokeOpacity:0.5}));

    col = "#002456"
    m.push(brd.createElement('midpoint',[l[5]],{face:'o',size:1,strokeColor:col,fillColor:col, name:''}));

    var c = brd.createElement('curve', JXG.Math.Numerics.bezier(p), {strokecolor:'#800080', strokeOpacity:0.6, strokeWidth:3});
    brd.unsuspendUpdate();
}

function getTransformedValueOfTimeComponent(inputTimeComponent) {
    return parseInt(inputTimeComponent) * 10;
}
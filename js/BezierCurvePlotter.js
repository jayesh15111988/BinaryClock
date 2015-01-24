/**
 * Created by jayeshkawli on 1/23/15.
 */

// Change registerEvents to true if we want user to interact with graph
// This Bezier curve is the courtesy of graph library http://jsxgraph.uni-bayreuth.de/wp/

var p = [], l = [], m = [];

function updateBezierCurveWithSplitTime(hoursFirstPart, hoursSecondPart, minutesFirstPart, minutesSecondPart, secondsFirstPart, secondsSecondPart) {
    var brd = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 90, 90, -10], keepaspectratio: true, axis: true, registerEvents: false});

    p = [];
    l = [];
    m = [];

    brd.suspendUpdate();
    col = 'blue';
    p.push(brd.createElement('point', [getTransformedValueOfTimeComponent(hoursFirstPart), getTransformedValueOfTimeComponent(hoursSecondPart)], {strokeColor: col, fillColor: col}));        // data point

    col = 'green';
    p.push(brd.createElement('point', [getTransformedValueOfTimeComponent(minutesFirstPart), getTransformedValueOfTimeComponent(minutesSecondPart)], {strokeColor: col, fillColor: col}));   // control point

    col = 'red';
    p.push(brd.createElement('point', [getTransformedValueOfTimeComponent(secondsFirstPart), getTransformedValueOfTimeComponent(secondsSecondPart)], {strokeColor: col, fillColor: col}));   // control point

    l.push(brd.createElement('segment', [p[0], p[1]], {strokeOpacity: 0.5}));
    l.push(brd.createElement('segment', [p[1], p[2]], {strokeOpacity: 0.5}));

    col = 'cyan';
    m.push(brd.createElement('midpoint', [l[0]], {face: 'o', size: 1, strokeColor: col, fillColor: col, name: ''}));

    col = 'yellow';
    m.push(brd.createElement('midpoint', [l[1]], {face: 'o', size: 1, strokeColor: col, fillColor: col, name: ''}));
    l.push(brd.createElement('segment', [m[0], m[1]], {strokeOpacity: 0.5}));

    col = 'black';
    m.push(brd.createElement('midpoint', [l[2]], {face: 'o', size: 1, strokeColor: col, fillColor: col, name: ''}));
    m.push(brd.createElement('midpoint', [l[2]], {face: 'o', size: 1, strokeColor: col, fillColor: col, name: ''}));

    var c = brd.createElement('curve', JXG.Math.Numerics.bezier(p), {strokecolor:'blue', strokeOpacity:0.6, strokeWidth:5});
    brd.unsuspendUpdate();
}

function getTransformedValueOfTimeComponent(inputTimeComponent) {
    return parseInt(inputTimeComponent) * 10;
}
/**
 * Created by jayeshkawli on 1/16/15.
 */
var chart;
var titleName = ""
window.onload = function () {
    chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        animationDuration: 2000,
        title:{
            text: titleName,
            fontSize: 40
        },
        axisY:{
            gridThickness: 0

        },
        data: [
            {
                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "column",
                dataPoints: [
                    { label: "Hours", y: 0 },
                    { label: "Minutes", y: 0 },
                    { label: "Seconds", y: 0 }
                ]
            }
        ]
    });
    chart.render();
}


function updateBarChartWithData(currentTimeData) {
   var splitTimeString = currentTimeData.split(":");
    chart.options.title.text = currentTimeData;
    chart.options.data[0].dataPoints =  [
        { label: "Hours",   y: parseInt(splitTimeString[0]) },
        { label: "Minutes", y: parseInt(splitTimeString[1]) },
        { label: "Seconds", y: parseInt(splitTimeString[2]) }
    ];
    chart.render();
}
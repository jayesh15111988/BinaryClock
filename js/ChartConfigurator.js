/**
 * Created by jayeshkawli on 1/16/15.
 */
var barChart, doughnutChart;
var titleName = ""
window.onload = function () {

    var initialDataPoint = [
        { label: "Hours", y: 0 },
        { label: "Minutes", y: 0 },
        { label: "Seconds", y: 0 }
    ];

    var titleParameters = {
        text: titleName,
        fontSize: 40,
        fontFamily: "Century Gothic"
    };

    barChart = new CanvasJS.Chart("barChartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: titleParameters,
        axisY:{
            gridThickness: 0,
            maximum: 60
        },
        data: [
            {
                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type: "column",
                dataPoints: initialDataPoint
            }
        ]
    });

    //Create doughnut chart on the screen
    doughnutChart = new CanvasJS.Chart("doughnutChartContainer",
        {
            exportEnabled: true,
            animationEnabled: true,
            title:titleParameters,
            data: [
                {
                    type: "doughnut",
                    dataPoints: initialDataPoint
                }
            ]
        });

    barChart.render();
    doughnutChart.render();
}


function updateBarChartWithData(currentTimeData) {
   var splitTimeString = currentTimeData.split(":");
    barChart.options.title.text = currentTimeData;
    doughnutChart.options.title.text = barChart.options.title.text;
    var hoursInInteger = parseInt(splitTimeString[0]);
    var minutesInInteger = parseInt(splitTimeString[1]);
    var secondsInInteger = parseInt(splitTimeString[2]);

    updateProgressBarWithTimeData(hoursInInteger, minutesInInteger, secondsInInteger);
    barChart.options.data[0].dataPoints =  [
        { label: "Hours",   y: hoursInInteger },
        { label: "Minutes", y: minutesInInteger },
        { label: "Seconds", y: secondsInInteger }
    ];

    doughnutChart.options.data[0].dataPoints = barChart.options.data[0].dataPoints

    barChart.render();
    doughnutChart.render();
}
/**
 * Created by jayeshkawli on 1/17/15.
 */
//Ref : http://jsfiddle.net/curtisbrinkman/Vynku/
    var initialSeconds = 0;
    var totalSecondsInDay = 86400;
    var totalSecondsTillNoon = 43200;
    $('#progressbar').progressbar({value: 0});

    function updateProgressBarWithTimeData (hours, minutes, seconds) {
        //console.log("hours " + hours + "minutes " + minutes + "seconds " + seconds);
        if(initialSeconds == 0) {
            initialSeconds = hours*3600 + minutes * 60 + seconds;
        }
        else {
            initialSeconds += 1;
            if(initialSeconds > totalSecondsInDay) {
                initialSeconds = 0;
            }
        }
        //console.log("total seconds " + initialSeconds);
        var currentCompletedTimeRatio = (initialSeconds/totalSecondsInDay)*100;
        //console.log("Ratio is " + currentCompletedTimeRatio);
        var choppedCurrentTimeCompletedRatio = parseFloat(currentCompletedTimeRatio).toFixed(2);
        var percentageTimeTillDayFinishes = parseFloat(100.0 - choppedCurrentTimeCompletedRatio).toFixed(2);
        var percentageTimeTillNoon = (initialSeconds > totalSecondsTillNoon) ? 0 : parseFloat((initialSeconds/totalSecondsTillNoon)*100).toFixed(2);
        $("#time-completed-percentage").text("Current Day Progress : " + choppedCurrentTimeCompletedRatio + "%");
        $("#time-till-day-finish").text("Remaining Time : "+percentageTimeTillDayFinishes+ "%");
        $("#time-till-noon").text("Remaining Time Till Noon : "+ percentageTimeTillNoon + "%");
        $('#progressbar').progressbar({value: currentCompletedTimeRatio})
    }

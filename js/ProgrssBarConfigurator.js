/**
 * Created by jayeshkawli on 1/17/15.
 */
//Ref : http://jsfiddle.net/curtisbrinkman/Vynku/
    var totalSecondsSinceMidnight = 0;
    var totalSecondsInDay = 86400;
    var totalSecondsTillNoon = 43200;
    $('#progressbar').progressbar({value: 0});

    function updateProgressBarWithTimeData (hours, minutes, seconds) {
        //console.log("hours " + hours + "minutes " + minutes + "seconds " + seconds);
        if(totalSecondsSinceMidnight == 0) {
            totalSecondsSinceMidnight = hours*3600 + minutes * 60 + seconds;
        }
        else {
            totalSecondsSinceMidnight += 1;
            if(totalSecondsSinceMidnight > totalSecondsInDay) {
                totalSecondsSinceMidnight = 0;
            }
        }

        //console.log("hours " + hours + "minutes "+ minutes + "seconds "+ seconds);
        sendUpdateWithCurrentNumberOfSeconds(totalSecondsSinceMidnight);
        //console.log("total seconds " + totalSecondsSinceMidnight);
        var currentCompletedTimeRatio = (totalSecondsSinceMidnight/totalSecondsInDay)*100;
        //console.log("Ratio is " + currentCompletedTimeRatio);
        var choppedCurrentTimeCompletedRatio = parseFloat(currentCompletedTimeRatio).toFixed(2);
        var percentageTimeTillDayFinishes = parseFloat(100.0 - choppedCurrentTimeCompletedRatio).toFixed(2);
        var percentageTimeTillNoon = (totalSecondsSinceMidnight > totalSecondsTillNoon) ? 0 : parseFloat(currentCompletedTimeRatio*2).toFixed(2);
        $("#time-completed-percentage").text("Current Day Progress : " + choppedCurrentTimeCompletedRatio + "%");
        $("#time-till-day-finish").text("Remaining Time : "+percentageTimeTillDayFinishes+ "%");
        $("#time-till-noon").text("Progress Towards Noon : "+ percentageTimeTillNoon + "%");
        $('#progressbar').progressbar({value: currentCompletedTimeRatio})
    }

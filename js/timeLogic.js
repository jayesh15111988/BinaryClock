/**
 * Created by jayeshkawli on 1/11/15.
 */
//Logic for Colored Clock

var oldHoursFirstPart, oldHoursSecondPart, oldMinutesFirstPart, oldMinutesSecondPart, oldSecondsFirstPart, oldSecondsSecondPart;
var hoursFirstPart, hoursSecondPart, minutesFirstPart, minutesSecondPart, secondsFirstPart, secondsSecondPart;

function updateColorClock() {
    var currentDate = new Date();
    var dateOnly = currentDate.today();
    var timeOnly = currentDate.timeNow();

    updateBarChartWithData(timeOnly);

    $('#date').text(dateOnly);
    $('#time').text(timeOnly);
    var currentColorCode = currentDate.currentTimeColor();

    $('#color-code').text(currentColorCode);
    $('#color-clock').css("background-color", currentColorCode);


    var splitTimeString = getIndividualTimeParameters(timeOnly);
    for (var i = 0, totalSplitStringLength = splitTimeString.length; i < totalSplitStringLength; i++) {
        $( "#b" + splitTimeString[i]).css("background-color", "black");
    }
}
function getIndividualTimeParameters(timeString) {
    var timeStringArrayRepresentation = timeString.split(":");
    var setBitsHolder = [];

    hoursFirstPart =  parseInt(timeStringArrayRepresentation[0]/10);
    hoursSecondPart = timeStringArrayRepresentation[0]%10;

    //Execute following function only if hour has changed
    if(hoursFirstPart != oldHoursFirstPart || hoursSecondPart != oldHoursSecondPart) {
        resetAllBullets([0,9]);
        setBitsHolder = setBitsHolder.concat(getSetBits(hoursFirstPart, 0));
        setBitsHolder = setBitsHolder.concat(getSetBits(hoursSecondPart, 1));
        oldHoursFirstPart = hoursFirstPart;
        oldHoursSecondPart =  hoursSecondPart;
    }


    minutesFirstPart = parseInt(timeStringArrayRepresentation[1]/10);
    minutesSecondPart = timeStringArrayRepresentation[1]%10;

    //Execute following function only if hour has changed
    if(minutesFirstPart != oldMinutesFirstPart || minutesSecondPart != oldMinutesSecondPart) {
        resetAllBullets([9,17]);
        setBitsHolder = setBitsHolder.concat(getSetBits(minutesFirstPart, 2));
        setBitsHolder = setBitsHolder.concat(getSetBits(minutesSecondPart, 3));
        oldMinutesFirstPart = minutesFirstPart;
        oldMinutesSecondPart = minutesSecondPart;
    }


    secondsFirstPart = parseInt(timeStringArrayRepresentation[2]/10);
    secondsSecondPart = timeStringArrayRepresentation[2]%10;

    //Execute following function only if hour has changed
    if(secondsFirstPart != oldSecondsFirstPart || secondsSecondPart != oldSecondsSecondPart) {
        resetAllBullets([17,24]);
        setBitsHolder = setBitsHolder.concat(getSetBits(secondsFirstPart, 4));
        setBitsHolder = setBitsHolder.concat(getSetBits(secondsSecondPart, 5));
        oldSecondsFirstPart = secondsFirstPart;
        oldSecondsSecondPart = secondsSecondPart;
    }

    return setBitsHolder;
}

function getSetBits(inputDecimalNumber, blockNumber) {
    var decimalRepresentation = inputDecimalNumber.toString(2);

    if (decimalRepresentation.length < 4) {
        decimalRepresentation = Array(4 - decimalRepresentation.length + 1).join("0") + decimalRepresentation;
    }
    var decimalArrayRepresentation = decimalRepresentation.split("");

    var setIndexCollection = [];
    for(var i = 0; i < 4; i++) {
        if(decimalArrayRepresentation[i] == "1") {
            setIndexCollection.push(i+ (blockNumber *4));
        }
    }
    return setIndexCollection;
}

function resetAllBullets(range) {
        //We have three clock types - binary, base 4 and octal
        var clockBases = ['b','f','o'];
        for (var baseIndex = 0, baseSize = clockBases.length; baseIndex < baseSize; baseIndex++ ) {
            for(var bulletIndex = range[0]; bulletIndex < range[1]; bulletIndex++ ) {
                $(document).ready(function() {
                    $( "#"+clockBases[baseIndex]+bulletIndex).css("background-color", "white");
                });
            }
        }
}

resetAllBullets(0, 24);
setInterval(updateColorClock, 1000);

function getDateParameters() {
    var currentDate = new Date();
    return [ (currentDate.getMonth()+1),
        currentDate.getDate(),
        currentDate.getFullYear(),
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds(),
        currentDate.getDay() ]
}
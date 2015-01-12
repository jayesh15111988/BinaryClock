/**
 * Created by jayeshkawli on 1/11/15.
 */
//Logic for Colored Clock
function updateColorClock() {
    var currentDate = new Date();
    var dateOnly = currentDate.today();
    var timeOnly = currentDate.timeNow();
    $('#date').text(dateOnly);
    $('#time').text(timeOnly);
    var currentColorCode = currentDate.currentTimeColor();
    $('#color-code').text(currentColorCode);
    $('#color-clock').css("background-color", currentColorCode);
}

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
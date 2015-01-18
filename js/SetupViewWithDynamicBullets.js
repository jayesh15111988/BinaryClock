/**
 * Created by jayeshkawli on 1/17/15.
 */

function createBinaryClockBulletDivs() {

    var individualDotIdCounter = 0;
    var possibleTimeParameters = ["hours","minutes","seconds"];
    for(var timeParameterIndex in possibleTimeParameters) {
        var currentTimeParameter = possibleTimeParameters[timeParameterIndex];
        for(var innerIndex=1; innerIndex <= 2; innerIndex++) {
            var classForElement = currentTimeParameter+innerIndex;
            var outerTimeElement = $("<div></div>").addClass(classForElement);
            $("#binary-clock").append(outerTimeElement);
            var justAppendedTimeParameterDiv = $("."+classForElement);
            var innerMostCounter = 0;
            for(; ; individualDotIdCounter++){
                if(innerMostCounter > 3) {
                    break;
                }
                var innerBulletElement = $("<div></div>").addClass("bullet-point-binary").attr("id","b"+individualDotIdCounter);
                justAppendedTimeParameterDiv.append(innerBulletElement);
                innerMostCounter++;
            }
        }
    }
    //Now after dynamically adding, divs make sure some of the bullets qualify as hidden elements on the view
    var idsWithPossiblyHiddenBullets = [0, 1, 8, 16];
    for(var hiddenIdentifiersIndex in idsWithPossiblyHiddenBullets) {
        $("#b"+idsWithPossiblyHiddenBullets[hiddenIdentifiersIndex]).addClass("hidden-section");
    }

    //Now add Footer which shows keys such as HH, MM and SS
    /*
     <div class="time-indicator">HH</div>
     <div class="time-indicator">MM</div>
     <div class="time-indicator">SS</div>

     */

    var timeKeyValues = ["HH", "MM", "SS"];
    var clockFooter = $(".binary-clock-footer");
    for(var timeKeyValueIndex in timeKeyValues) {
        var elementToAppend = $("<div></div>").addClass("time-indicator").text(timeKeyValues[timeKeyValueIndex]);
        clockFooter.append(elementToAppend);
    }

}


createBinaryClockBulletDivs();

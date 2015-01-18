/**
 * Created by jayeshkawli on 1/17/15.
 */
var oldElementSequenceNumber = -1;
var newElementSequenceNumber = 0;
var inputRangeLower = 0, inputRangeUpper = 720;
var outputRangeLower = 0, outputRangeUpper = 117;
var nextUpdatedSecondsValue = -1;
var didUpdateValueForFirstTime = false;
var elementUpdateTimeNormalizingFactor = 6.14;

function sendUpdateWithCurrentNumberOfSeconds(numberOfSecondsSoFar) {
    var numberOfMinutes = numberOfSecondsSoFar / 60;
    var scaledNumberOfMinutes = numberOfMinutes % 721;

    newElementSequenceNumber  = parseInt((scaledNumberOfMinutes-inputRangeLower)/(inputRangeUpper-inputRangeLower) * (outputRangeUpper-outputRangeLower) + outputRangeLower);


    if(newElementSequenceNumber != oldElementSequenceNumber) {
        var currentElementName = allElementsCollectionWithNames[newElementSequenceNumber];
        var currentElementDetails = elementsData[currentElementName]; //This is dictionary
        configureCurrentViewWithElementDetails(currentElementDetails, currentElementName);
        oldElementSequenceNumber = newElementSequenceNumber;
        console.log("Current value of element update " + numberOfMinutes);
        //We came here for the first time right

        if(didUpdateValueForFirstTime == true) {
            nextUpdatedSecondsValue = parseInt(elementUpdateTimeNormalizingFactor*60);
        }

        didUpdateValueForFirstTime = true;
    }

    if(nextUpdatedSecondsValue != -1) {
        $("#next-time-till-update").text("Seconds till next update "+ nextUpdatedSecondsValue--);
    }
}

function configureCurrentViewWithElementDetails(currentElementDetails, elementName) {
    $("#element-name").text(currentElementDetails.symbol + " (" + currentElementDetails.atomic_number +")");
    $("#name").text(elementName);
    $("#atomic-weight").text(currentElementDetails.atomic_weight);
    $("#density").text(currentElementDetails['density g/cm']);
    $("#melting-point").text(currentElementDetails['melting_point K']);
    $("#boiling-point").text(currentElementDetails['boiling_point K']);
    $("#atomic-radius").text(currentElementDetails['atomic_radius pm']);
    $("#conductivity").text(currentElementDetails['thermal_conductivity (@25°C W/m K) ']);
    $("#lattice-structure").text(currentElementDetails.lattice_structure);
    $("#electronic-configuration").text(currentElementDetails.electronic_configuration);
}
/**
 * Created by jayeshkawli on 1/17/15.
 */
var oldElementSequenceNumber = -1;
var newElementSequenceNumber = 0;
var inputRangeLower = 0, inputRangeUpper = 720;
var outputRangeLower = 0, outputRangeUpper = 117;
function sendUpdateWithCurrentNumberOfSeconds(numberOfSecondsSoFar) {
    var numberOfMinutes = numberOfSecondsSoFar / 60;
    var scaledNumberOfMinutes = numberOfMinutes % 721;

    newElementSequenceNumber  = parseInt((scaledNumberOfMinutes-inputRangeLower)/(inputRangeUpper-inputRangeLower) * (outputRangeUpper-outputRangeLower) + outputRangeLower);
    console.log("Element sequence number " + newElementSequenceNumber);

    if(newElementSequenceNumber != oldElementSequenceNumber) {
        var currentElementName = allElementsCollectionWithNames[newElementSequenceNumber];
        var currentElementDetails = elementsData[currentElementName]; //This is dictionary
        configureCurrentViewWithElementDetails(currentElementDetails);
        oldElementSequenceNumber = newElementSequenceNumber;
    }
}

function configureCurrentViewWithElementDetails(currentElementDetails) {
    $("#element-name").text(currentElementDetails.symbol + " (" + currentElementDetails.atomic_number +")");
    $("#atomic-number").text(currentElementDetails.atomic_number);
    $("#atomic-weight").text(currentElementDetails.atomic_weight);
    $("#density").text(currentElementDetails['density g/cm']);
    $("#melting-point").text(currentElementDetails['melting_point K']);
    $("#boiling-point").text(currentElementDetails['boiling_point K']);
    $("#atomic-radius").text(currentElementDetails['atomic_radius pm']);
    $("#conductivity").text(currentElementDetails['thermal_conductivity (@25°C W/m K) ']);
    $("#lattice-structure").text(currentElementDetails.lattice_structure);
    $("#electronic-configuration").text(currentElementDetails.electronic_configuration);
}
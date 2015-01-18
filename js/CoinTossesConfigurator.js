/**
 * Created by jayeshkawli on 1/18/15.
 */
var numberOfFlips = 0;
var numberOfHeads = 0, numberOfTails = 0;

function updateCoinTosses() {
    console.log("Updated..");
    var randomNumber = getRandomInt(0,1);
    if(randomNumber == 0) {
        numberOfHeads++;
    }
    else {
        numberOfTails++;
    }

    $("#total-tosses").text("Total Coin Tosses So Far " + (++numberOfFlips));
    var percentageHeads = parseFloat((numberOfHeads/numberOfFlips)*100).toFixed(2);
    var percentageTails = parseFloat(100.0 - percentageHeads).toFixed(2);

    $("#number-of-heads").html(" Heads <br/>"+ numberOfHeads + "<br/>" + percentageHeads + "%");
    $("#number-of-tails").html(" Tails <br/>"+ numberOfTails + "<br/>" + percentageTails + "%");

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(updateCoinTosses, 1000);

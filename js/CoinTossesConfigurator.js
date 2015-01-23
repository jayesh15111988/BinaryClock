/**
 * Created by jayeshkawli on 1/18/15.
 */
var numberOfFlips = 0;
var numberOfHeads = 0, numberOfTails = 0;
var majorityCoinEnum = {
    HEAD : 0,
    TAIL: 1
};
var oldMajority = majorityCoinEnum.HEAD;
var newMajority = majorityCoinEnum.TAIL;

function updateCoinTosses() {
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

    newMajority = (percentageHeads > percentageTails) ? majorityCoinEnum.HEAD : majorityCoinEnum.TAIL;
    updateCoinImageIfNecessary();

    $("#number-of-heads").html(" Heads <br/>"+ numberOfHeads + "<br/>" + percentageHeads + "%");
    $("#number-of-tails").html(" Tails <br/>"+ numberOfTails + "<br/>" + percentageTails + "%");

}

function updateCoinImageIfNecessary() {
    if(newMajority != oldMajority) {
        if(newMajority == majorityCoinEnum.HEAD) {
            //Change image source to head image
            $('#coin-side-image').attr('src', 'images/coin-head-transparent.gif');
        }
        else {
            //Change image source to tail image
            $('#coin-side-image').attr('src', 'images/coin-tail-transparent.gif');
        }
        oldMajority = newMajority;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(updateCoinTosses, 1000);

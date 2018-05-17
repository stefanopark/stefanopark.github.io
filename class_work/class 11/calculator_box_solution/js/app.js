var total = 0;

function setOutput() {
    $("#out").html(total);
}
// +10

var plusTen = $("#a10").click(addTen);

plusTen.onclick = addTen;

function addTen() {
    total = total + 10;

    setOutput()
}

// +20

var plusTwenty = $("#a20").click(addTwenty);

plusTwenty.onclick = addTwenty;

function addTwenty() {
    total = total + 20;

    setOutput()
}

// +30

var plusThirtyButton = $("#a30").click(addThirty);

plusThirtyButton.onclick = addThirty;

function addThirty() {
    total = total + 30;

    setOutput()
}

// -10

var minusTenButton = $("#n10").click(subtractTen);

minusTenButton.onclick = subtractTen;

function subtractTen() {
    total = total - 10;

    setOutput()
}


// -20

var minusTwentyButton = $("#n20").click(subtractTwenty);

minusTwentyButton.onclick = subtractTwenty;

function subtractTwenty() {
    total = total - 20;

    setOutput()
}

// -30

var minusThirtyButton = $("#n30").click(subtractThirty);

minusThirtyButton.onclick = subtractThirty;

function subtractThirty() {
    total = total - 30;

    setOutput()
}

// red

var redButton = $("#red").click(turnRed);

redButton.onclick = turnRed;

function turnRed() {
    $("#out").css("background-color") = "red";
}

// blue

var blueButton = $("#blue").click(turnBlue);

blueButton.onclick = turnBlue;

function turnBlue() {
    $("#out").css("background-color") = "blue";
}

// reset

var outputButton = $("#out").click(reset);

outputButton.onclick = reset;

function reset() {
    total = 0;

    $("#out").html(total);
    $("#out").css("background-color") = "white";
}
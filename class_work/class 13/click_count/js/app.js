// As a user
// When I click anywhere on the page
// I expect the click counter to increase by 1


// As a user
// When the click counter reaches 5
// I expect the background of the body to be red


// As a user
// When the click counter reaches 10
// I expect the background of the body to be green


// As a user
// When the click counter reaches 15
// I expect the background of the body to be blue
$("#clickme").click(clickCount);
var total = 0;

function clickCount() {
    total += 1;
    $("#click-num").html(total);

    if (total == 5) {
        $("body").css("background-color", "red");
    } else if (total == 10) {
        $("body").css("background-color", "green");
    } else if (total == 15) {
        $("body").css("background-color", "blue");
    } else {
        $("body").css("background-color", "");
    }
}
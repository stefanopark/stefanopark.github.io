// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table
var total = 0;

$("#entry").submit(function(e) {
    e.preventDefault();
    var entry = $("#newEntry").val();
    var tr = $("<tr></tr>").append("<td></td>").text(entry);
    $("#entries").append(tr);
    total += parseInt(entry);
    $("#total").text("$" + total + ".00");
    $("#newEntry").val("");
});

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared
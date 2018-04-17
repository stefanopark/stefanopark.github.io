function operation(operator, number) {
    if (operator === "+") {
        var out = document.querySelector("#out");
        var total = parseInt(out.innerHTML) + parseInt(number);
        out.innerHTML = total;
    } else {
        var out = document.querySelector("#out");
        var total = parseInt(out.innerHTML) - parseInt(number);
        out.innerHTML = total;
    }
}

function changeColor(color) {
    if (color === "red") {
        var out = document.querySelector("#out");
        out.style.backgroundColor = "red";
    } else {
        var out = document.querySelector("#out");
        out.style.backgroundColor = "blue";
    }
}

function reset() {
    var out = document.querySelector("#out");
    out.style.backgroundColor = "white";
    out.innerHTML = 0;
}
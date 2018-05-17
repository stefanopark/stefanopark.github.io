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


// var plusTen = document.querySelector("#a10");
// plusTen.onclick = addTen;
// function addTen() {
//     var total=document.querySelector("#out").innerHTML;
//     var newTotal= parseInt ("total") + 10;
//     document.querySelector("#out").innerHTML=newTotal;
// }
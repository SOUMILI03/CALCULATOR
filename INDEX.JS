function appendValue(value) {
    document.getElementById("name").value += value;
}

function cleardislay() {
    document.getElementById("name").value = "";
}

function lastdelete() {
    let display = document.getElementById("name");
    display.value = display.value.slice(0, -1);
}

// function bracket()
//  {
//     // let display = document.getElementById("name");
//     // let lastChar = display.value.slice(-1);
    
//     // if (lastChar === "(" || lastChar === "" || "/-*+".includes(lastChar)) {
//     //     display.value += "(";
//     // } else {
//     //     display.value += ")";
//     //}

// }
function bracket() {
    let display = document.getElementById("name");
    let value = display.value;
    let openCount = (value.match(/\(/g) || []).length;  // Count '('
    let closeCount = (value.match(/\)/g) || []).length; // Count ')'
    let lastChar = value.slice(-1);

    if (lastChar === "" || "/-*+".includes(lastChar) || lastChar === "(") {
        display.value += "(";  // Add '(' if no number or after an operator
    } else if (openCount > closeCount) {
        display.value += ")";  // Add ')' only if an open '(' exists
    } else {
        display.value += "*("; // Start new multiplication (e.g., "2(3)" → "2*(3)")
    }
}


function percentage() {
    let display = document.getElementById("name");
    display.value = parseFloat(display.value) / 100;
}

function result() {
    try {
        let expression = document.getElementById("name").value;
        let evaluatedResult = Function('"use strict"; return (' + expression + ')')();
        document.getElementById("name").value = evaluatedResult;
    } catch (error) {
        alert("Invalid Expression");
    }
}

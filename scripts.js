function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }

    if (operation === 'add') {
        result = num1 + num2;
    }
    
    if (operation === 'subtract') {
        result = num1 - num2;
    }
    
    if (operation === 'multiply') {
        result = num1 * num2;
    }
    
    if (operation === 'divide') {
        if (num2 === 0) {
            document.getElementById("output").innerHTML = "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    }

    const output = document.getElementById("output");
    output.innerHTML = String(result);
    
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function power() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers";
        return;
    }

    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    const output = document.getElementById("output");
    output.innerHTML = String(result);
    
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "Result will appear here";
    document.getElementById("output").style.color = "black";
}
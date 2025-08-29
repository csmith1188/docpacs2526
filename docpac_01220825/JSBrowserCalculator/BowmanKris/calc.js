function calculator() {
    console.log("Calculator function called");

    // Get the input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    console.log("Input values:", num1, num2);

    // Get the selected operation
    var operation = document.getElementById("operator").value;

    console.log("Selected operation:", operation);

    // Initialize the result variable
    var result;

    // Perform the calculation based on the selected operation

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error!");
                return;
            }
            result = num1 / num2;
            break;
        case "%":
            if (num2 === 0) {
                alert("Error!");
                return;
            }
            result = num1 % num2;
            break;
        default:
            alert("Invalid operation selected");
            return;
    }

    console.log("Calculation result:", result);

    // Display the result
    document.getElementById("result").innerText = "Result: " + result;
}
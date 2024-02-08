function mathOperations(a, b, operator) {
    let result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else if (operator === "%") {
        result = a % b;
    } else if (operator === "**") {
        result = Math.pow(a, b);
    }

    console.log(result);
}

mathOperations(10, 10, "**");
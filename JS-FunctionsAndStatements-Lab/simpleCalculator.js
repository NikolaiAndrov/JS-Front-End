function calculator(a, b, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };

    let result = operations[operator](a, b);
    console.log(result);
}
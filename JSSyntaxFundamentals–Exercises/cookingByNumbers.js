function operations(numAsStr, operation1, operation2, operation3, operation4, operation5) {
    let operations = [operation1, operation2, operation3, operation4, operation5];
    let num = Number(numAsStr);

    for(let i = 0; i < operations.length; i++) {

        let currentOperation = operations[i];

        if (currentOperation === "chop") {
            num /= 2;
            console.log(num);
        } else if (currentOperation === "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (currentOperation === "spice") {
            num += 1;
            console.log(num);
        } else if (currentOperation === "bake") {
            num *= 3;
            console.log(num);
        } else if (currentOperation === "fillet") {
            num *= 0.8;
            console.log(num);
        }
    }
}

operations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
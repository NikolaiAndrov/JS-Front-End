function printAndSumNumbers(a, b) {

    let numsConcat = "";
    let sum = 0;

    for(let i = a; i <= b; i++) {
        sum += i;
        numsConcat += i + " ";
    }

    console.log(numsConcat.trimEnd());
    console.log(`Sum: ${sum}`);
}
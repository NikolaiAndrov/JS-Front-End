function addAndSubtract(a, b, c) {

    let sumNums = sum(a, b);
    let result = sumNums - c;
    console.log(result);

    function sum(a, b) {
        return a + b;
    }
}
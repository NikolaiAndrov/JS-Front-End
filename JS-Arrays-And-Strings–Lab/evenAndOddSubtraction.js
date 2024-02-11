function evenOddOps(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (const num of array) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let result = evenSum - oddSum;
    console.log(result);
}
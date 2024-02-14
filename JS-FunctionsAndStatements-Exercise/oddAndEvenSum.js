function getOddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;

    while(num > 0) {

        let currentNum = num % 10;
        num = parseInt(num / 10);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
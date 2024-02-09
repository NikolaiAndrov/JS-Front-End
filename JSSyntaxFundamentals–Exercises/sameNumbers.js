function numbers(num) {
    let numsAsStr = String(num);
    let isTheSame = true;
    let sum = 0;

    for (let i = 0; i < numsAsStr.length - 1; i++) {

        if(numsAsStr[i] !== numsAsStr[i + 1]) {
            isTheSame = false;
        }

        sum += parseInt(numsAsStr[i])
    }

    sum += parseInt(numsAsStr[numsAsStr.length - 1])

    console.log(isTheSame)
    console.log(sum)
}
function rotateArray(array, rotations) {

    let iterations =  rotations % array.length;
    let lastIndex = array.length - 1;
    let length = array.length;

    for(let i = 0; i < iterations; i++) {

        let firstNum = array[0];

        for(let j = 0; j < length - 1; j++) {
            array[j] = array[j + 1]
        }

        array[lastIndex] = firstNum
    }

    console.log(array.join(" "));
}
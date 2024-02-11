function sortNumbers(array) {

    array.sort((a, b) => a - b);
    let iterations = parseInt(array.length / 2);
    let result = [];

    for (let index = 0; index < iterations; index++) {
        result.push(array[index]);
        result.push(array[array.length - 1 - index]);
    }

    if (array.length % 2 !== 0) {
        result.push(array[iterations]);
    }

    return result;
}
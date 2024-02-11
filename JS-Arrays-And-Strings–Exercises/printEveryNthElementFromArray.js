function printNthElement(array, step) {
    let length = array.length;
    let result = [];

    for (let index = 0; index < length; index += step) {
        result.push(array[index]);
    }

    return result;
}
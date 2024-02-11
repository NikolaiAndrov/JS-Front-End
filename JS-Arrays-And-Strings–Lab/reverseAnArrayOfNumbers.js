function numsOperation(n, array) {
    let result = array.splice(0, n);
    result.reverse();
    console.log(result.join(" "));
}
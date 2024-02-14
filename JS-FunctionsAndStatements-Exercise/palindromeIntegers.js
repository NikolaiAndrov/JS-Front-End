function isNumberPalindrom(numberArray) {

    for (let i = 0; i < numberArray.length; i++) {
        let currentNum = parseInt(numberArray[i].toString().split("").reverse().join(""));
        
        if (currentNum === numberArray[i]) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

isNumberPalindrom([123,323,421,121]);
function containsWord(word, text) {
    let textArray = text.toLowerCase().split(" ");

    for (let i = 0; i < textArray.length; i++) {
        
        if (textArray[i] === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}
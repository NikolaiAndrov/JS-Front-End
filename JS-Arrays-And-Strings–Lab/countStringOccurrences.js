function getWordsCount(text, word) {
    let count = 0;
    let textArray = text.split(" ");

    for (const currentWord of textArray) {
        if (currentWord === word) {
            count++;
        }
    }

    console.log(count);
}
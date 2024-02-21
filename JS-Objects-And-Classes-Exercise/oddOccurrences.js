function printOddOccurrences(wordsInput) {
    let words = wordsInput.toLowerCase().split(" ");
    let wordsCounter = [];

    for (const currentWord of words) {
        let counter = wordsCounter.find(c => c.word === currentWord);

        if (counter) {
            counter.count++;
            continue;
        }

        let newCounter = {
            word: currentWord,
            count: 1
        }
        wordsCounter.push(newCounter);
    }

    let result = "";

    for (const counter of wordsCounter) {
        if (counter.count % 2 !== 0) {
            result += counter.word + " ";
        }
    }

    console.log(result.trimEnd());
}

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
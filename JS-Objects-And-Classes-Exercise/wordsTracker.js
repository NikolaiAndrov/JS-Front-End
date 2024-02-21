function trackWords(words) {
    let wordsToTrack = words.shift().split(" ");
    let trackers = [];

    for (const word of wordsToTrack) {
        let tracker = {
            word,
            count: 0
        }
        trackers.push(tracker);
    }

    for (const word of words) {
        let tracker = trackers.find(t => t.word === word);
        if (tracker) {
            tracker.count++;
        }
    }

    trackers.sort((a, b) => b.count - a.count)
    
    for (const tracker of trackers) {
        console.log(`${tracker.word} - ${tracker.count}`);
    }
}

trackWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
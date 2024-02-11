function findWords(text) {
    let regex = /#[A-Za-z]+/gm;
    let matches = text.match(regex);

    for (let i = 0; i < matches.length; i++) {
        matches[i] = matches[i].replace("#", "");
        console.log(matches[i]);
    }
}
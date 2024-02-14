function printCharactersInRange(a, b) {
    let charANum = a.charCodeAt();
    let charBNum = b.charCodeAt();

    let start = Math.min(charANum, charBNum);
    let end = Math.max(charANum, charBNum);

    let result = "";

    for (let i = start + 1; i < end; i++) {
        let currentChar = String.fromCharCode(i);
        result += `${currentChar} `;
    }

    console.log(result.trimEnd());
}
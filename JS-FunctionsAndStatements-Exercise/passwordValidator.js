function passwordValidator(password) {

    let passwordLength = password.length;
    let digitCount = 0
    let isNotAllowedSymbol = false;
    let isValid = true;

    for (let i = 0; i < passwordLength; i++) {
        
        let currentChar = password[i];

        if (isDigit(currentChar)) {
            digitCount++;
        } else if (!isLetter(currentChar)) {
            isNotAllowedSymbol = true;
            isValid = false;
        }
    }

    if (passwordLength < 6 || passwordLength > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (isNotAllowedSymbol) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (digitCount < 2) {
        isValid = false
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }

    function isLetter(char) {
        let regex = /^[a-zA-Z]$/gm;
        return regex.test(char);
    }

    function isDigit(char) {
        let regex = /^[0-9]$/gm;
        return regex.test(char);
    }
}
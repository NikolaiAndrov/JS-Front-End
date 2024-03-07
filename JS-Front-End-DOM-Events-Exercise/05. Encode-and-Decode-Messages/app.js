function encodeAndDecodeMessages() {

    let buttons = document.getElementsByTagName("button");
    let textarea = document.getElementsByTagName("textarea");

    let encodeButton = buttons[0];
    encodeButton.addEventListener("click", encode)

    let decodeButton = buttons[1]
    decodeButton.addEventListener("click", decode)

    function encode() {

        let text = textarea[0].value;
        let resultText = "";
        
        for (const char of text) {
            resultText += String.fromCharCode(char.charCodeAt(0) + 1);
        }

       textarea[1].value = resultText;
       textarea[0].value = "";
    }

    function decode() {

        let text = textarea[1].value;
        let resultText = "";

        for (const char of text) {
            resultText += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        textarea[1].value = resultText;
        decodeButton.disabled = true;
    }
}
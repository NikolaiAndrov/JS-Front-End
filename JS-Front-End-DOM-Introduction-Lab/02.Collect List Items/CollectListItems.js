function extractText() {

    const elements = document.getElementsByTagName("li");
    const textElements = [];

    for (const element of Array.from(elements)) {
        textElements.push(element.textContent);
    }

    const result = document.getElementById("result"); 
    result.textContent = textElements.join("\n");
}
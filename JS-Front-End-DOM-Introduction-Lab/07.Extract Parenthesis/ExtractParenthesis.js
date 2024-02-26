function extract(content) {
    let text = document.getElementById(content).textContent;
    let matches = text.match(/\(([^)]+)\)/g);
    const extractedText = matches.map(match => match.slice(1, -1));
    
    return extractedText.join("; ");
}
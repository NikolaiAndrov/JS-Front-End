function sumTable() {
    const elements = document.getElementsByTagName("tr");
    let sum = 0;
    for (let i = 1; i < elements.length - 1; i++) {
        
        const cells = elements[i].children;
        const currentPrice = Number(cells[1].textContent);
        sum += currentPrice;
    }

    const result = document.getElementById("sum");
    result.textContent = sum
}
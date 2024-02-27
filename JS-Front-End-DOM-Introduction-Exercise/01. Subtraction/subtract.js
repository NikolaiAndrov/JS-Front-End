function subtract() {
    const firstNumbetr = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const sum = firstNumbetr - secondNumber;
    document.getElementById("result").textContent = sum;
}
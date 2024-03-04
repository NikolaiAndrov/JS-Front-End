function addItem() {
    let input = document.querySelector("#newItemText"); 
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    let ul = document.querySelector("#items");
    ul.appendChild(listItem);
    input.value = "";
}
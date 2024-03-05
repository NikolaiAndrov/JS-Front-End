function addItem() {
    let newInputItem = document.querySelector("#newItemText");
    let newListItem = document.createElement("li");

    newListItem.textContent = newInputItem.value;
    document.querySelector("#items").appendChild(newListItem);
    newInputItem.value = "";

    let deleteLink = document.createElement("a");
    deleteLink.textContent = "[Delete]";
    deleteLink.href = "#";
    newListItem.appendChild(deleteLink);

    deleteLink.addEventListener("click", deleteElement);

    function deleteElement(e) {
        let rowToDelete = e.currentTarget.parentNode;
        rowToDelete.remove();
    }
}
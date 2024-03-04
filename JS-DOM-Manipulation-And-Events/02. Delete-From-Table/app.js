function deleteByEmail() {

    let emailToDelete = document.querySelector("input[name = 'email']");
    let allEmails = document.querySelectorAll("tbody tr");
    let isDeleted = false;
    
    for (const emailRow of allEmails) {

        if (emailRow.children[1].textContent === emailToDelete.value) {
            emailRow.remove();
            isDeleted = true;
        }
    }

    emailToDelete.value = "";
    let result = document.querySelector("#result");

    if (isDeleted) {
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}
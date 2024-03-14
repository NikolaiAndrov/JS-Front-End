function attachEvents() {
    
    const url = "http://localhost:3030/jsonstore/messenger";

    const[inputName, inputContent, sendBtn, refreshBtn] = document.getElementsByTagName("input");
    const messagesArea = document.getElementById("messages");

    sendBtn.addEventListener("click", async () => {
        const message = {
            author: inputName.value,
            content: inputContent.value
        };

        let isValid = inputName.value !== "" && inputContent.value !== "";

        if (isValid) {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(message)
            });
        }

        inputName.value = "";
        inputContent.value = "";
    });

    refreshBtn.addEventListener("click", async () => {

        const response = await fetch(url);
        const messages = await response.json();
        const messagesToDisplay = [];
    
        for (const currentMessage of Object.values(messages)) {
            
            messagesToDisplay.push(`${currentMessage.author}: ${currentMessage.content}`);
        }

        messagesArea.textContent = messagesToDisplay.join("\n");
    });
}

attachEvents();
function attachEvents() {
    
    const url = "http://localhost:3030/jsonstore/phonebook/";

    document.getElementById("btnLoad").addEventListener("click", loadAllContacts);
    
    document.getElementById("btnCreate").addEventListener("click", createContact);
    
    async function createContact() {
        
        const person = document.getElementById("person");
        const phone = document.getElementById("phone");

        const contact = {
            person: person.value,
            phone: phone.value
        };

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(contact)
        });

        person.value = "";
        phone.value = "";
        loadAllContacts();
    }

    async function loadAllContacts() {
        
        const response = await fetch(url);
        const contacts = await response.json();
        
        const phoneBookUl = document.getElementById("phonebook");
       
        for (const contact of Object.values(contacts)) {

            const li = document.createElement("li");
            li.textContent = `${contact.person}: ${contact.phone}`;

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            
            li.appendChild(delBtn);
            
            phoneBookUl.appendChild(li);

            delBtn.addEventListener("click", deleteContact);

            function deleteContact() {

                const id = contact._id;

                fetch(url + id, {
                    method: "DELETE"
                });

                li.remove();
            }
        }
    }

}

attachEvents();
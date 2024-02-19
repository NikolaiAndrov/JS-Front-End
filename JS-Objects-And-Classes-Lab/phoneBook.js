function printPhoneBook(phoneBook) {
    const person = {};

    for (const info of phoneBook) {

        const personArr = info.split(" ");
        const name = personArr[0];
        const phone = personArr[1];

        person[name] = phone;
    }

    for (const[name, phone] of Object.entries(person)) {
        console.log(`${name} -> ${phone}`);
    }
}
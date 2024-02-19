function createObjectAndConvertToJson(name, lastName, hairColor) {
    const obj = {
        name: name,
        lastName: lastName, 
        hairColor: hairColor
    };

    const json = JSON.stringify(obj);

    console.log(json);
}
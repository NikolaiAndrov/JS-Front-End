function printKeyValueOfObject(obj) {
    for (const[key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);  
    }
}
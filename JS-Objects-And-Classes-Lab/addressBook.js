function printNameAndAddress(arrayInfo) {
    let personInfo = {};

    for (const item of arrayInfo) {
        let[name, address] = item.split(":");

        personInfo[name] = address;
    }

    let result = [];

    for (const[name, address] of Object.entries(personInfo)) {
        result.push(`${name} -> ${address}`);
    }

    result = result.sort();

    for (const item of result) {
        console.log(item);
    }
}
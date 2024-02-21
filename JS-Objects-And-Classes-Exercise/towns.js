function printTownInfo(inputTowns) {
    let towns = [];

    for (const currentTown of inputTowns) {
        let [town, latitude, longitude] = currentTown.split(" | ");

        let newTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        towns.push(newTown);
    }

    towns.forEach(town => console.log(town));
}
function parking(input) {

    let plates = [];
    
    for (const command of input) {
        let[direction, plate] = command.split(", ");

        if (direction === "IN") {
            if (plates.includes(plate)) {
                continue;
            }

            plates.push(plate);

        } else if (direction === "OUT") {
            if (!plates.includes(plate)) {
                continue;
            }

            let index = plates.indexOf(plate);
            plates.splice(index, 1);
        }
    }

    if (plates.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        plates.sort((a, b) => a.localeCompare(b));

        for (const plate of plates) {
            console.log(plate);
        }
    }
}

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
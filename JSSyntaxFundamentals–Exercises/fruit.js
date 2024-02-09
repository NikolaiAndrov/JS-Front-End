function getFruitInfo(fruit, grams, price) {
    let kg = grams / 1000;
    let moneyNeeded = kg * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
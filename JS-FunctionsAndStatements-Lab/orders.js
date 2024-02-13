function makeOrder(product, count) {
    const menu = {
        coffee: 1.50,
        water: 1,
        coke: 1.40,
        snacks: 2
    };

    let result = menu[product] * count;
    console.log(result.toFixed(2));
}

makeOrder("coffee", 2);
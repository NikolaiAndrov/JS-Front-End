function printStoreProvosion(inStock, newOrder) {
    let products = {};

    for (let i = 0; i < inStock.length; i+=2) {
        let productName = inStock[i];
        let productQuantity = Number(inStock[i + 1]);
        products[productName] = productQuantity;
    }

    for (let i = 0; i < newOrder.length; i+=2) {
        let productName = newOrder[i];
        let productQuantity = Number(newOrder[i + 1]);

        if (products.hasOwnProperty(productName)) {
            products[productName] += productQuantity;
            continue;
        }

        products[productName] = productQuantity;
    }

    for (const name in products) {
        console.log(`${name} -> ${products[name]}`);
    }
}

printStoreProvosion(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
function printLoadingPercentage(percentage) {

    let percentCount = percentage / 10;
    let percentElements = "%".repeat(percentCount);

    let dotsCount = 10 - percentCount;
    let dotElements = ".".repeat(dotsCount);

    if (percentCount === 10) {
        console.log("100% Complete!");
        console.log(`[${percentElements}]`);
    } else {
        console.log(`${percentage}% [${percentElements}${dotElements}]`);
        console.log("Still loading...");
    }
}
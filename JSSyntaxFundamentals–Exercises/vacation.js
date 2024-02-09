function vacationPromotions(peopleCount, groupType, dayOfWeek) {

    let singleTicketPrice;
    let totalPrice;

    if (dayOfWeek === "Friday") {

        if (groupType === "Students") {

            singleTicketPrice = 8.45;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 30) {
                totalPrice *= 0.85
            }

        } else if (groupType === "Business") {

            singleTicketPrice = 10.90;

            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * singleTicketPrice;

        } else if (groupType === "Regular") {

            singleTicketPrice = 15;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }

    } else if (dayOfWeek === "Saturday") {

        if (groupType === "Students") {

            singleTicketPrice = 9.80;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 30) {
                totalPrice *= 0.85
            }

        } else if (groupType === "Business") {

            singleTicketPrice = 15.60;

            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * singleTicketPrice;

        } else if (groupType === "Regular") {

            singleTicketPrice = 20;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }

    } else if (dayOfWeek === "Sunday") {

        if (groupType === "Students") {

            singleTicketPrice = 10.46;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 30) {
                totalPrice *= 0.85
            }

        } else if (groupType === "Business") {

            singleTicketPrice = 16;

            if (peopleCount >= 100) {
                peopleCount -= 10;
            }

            totalPrice = peopleCount * singleTicketPrice;

        } else if (groupType === "Regular") {

            singleTicketPrice = 22.50;
            totalPrice = peopleCount * singleTicketPrice;

            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
        }
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
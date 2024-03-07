function attachEventsListeners() {

    let daysBtn = document.getElementById("daysBtn");
    let daysInput = document.getElementById("days");
    daysBtn.addEventListener("click", daysConverter);

    let hoursBtn = document.getElementById("hoursBtn");
    let hoursInput = document.getElementById("hours");
    hoursBtn.addEventListener("click", hoursConverter)

    let minutesBtn = document.getElementById("minutesBtn");
    let minutesInput = document.getElementById("minutes");
    minutesBtn.addEventListener("click", minutesConverter)

    let secondsBtn = document.getElementById("secondsBtn");
    let secondsInput = document.getElementById("seconds");
    secondsBtn.addEventListener("click", secondsConverter);


    function daysConverter() {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function hoursConverter() {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    }

    function minutesConverter() {
        secondsInput.value = minutesInput.value * 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }

    function secondsConverter() {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }
}
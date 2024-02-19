function scheduleMeetings(meetingInfo) {
    let schedule = {};

    for (const iterator of meetingInfo) {
        let[day, name] = iterator.split(" ");

        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = name
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
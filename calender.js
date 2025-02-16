let events = [
    {
        title: "Client Meeting with XYZ Corp",
        date: new Date(new Date().setDate(new Date().getDate() + 2)), 
        location: "Zoom",
        attendees: new Set(["Alex", "Tina", "Morgan"]),
        description: "Discussing content strategy and marketing campaigns."
    },
    {
        title: "Content Launch: New Product",
        date: new Date(new Date().setDate(new Date().getDate() + 7)), 
        location: "Online",
        attendees: new Set(["Charlie", "Jordan", "Sasha"]),
        description: "Launching the new product line on all platforms."
    },
    {
        title: "Social Media Webinar",
        date: new Date(new Date().setDate(new Date().getDate() + 14)),
        location: "Nairobi",
        attendees: new Set(["Grace", "Sophia", "Ava"]),
        description: "Webinar on social media trends for 2025."
    }
];

let upcomingEvents = events
    .filter(event => {
        let today = new Date();
        let sevenDaysLater = new Date();
        sevenDaysLater.setDate(today.getDate() + 7);
        return event.date >= today && event.date <= sevenDaysLater;
    })
    .map(event => event.title); /

console.log("Upcoming Events:", upcomingEvents);

let eventOrganizers = new WeakMap();

events.forEach(event => {
    eventOrganizers.set(event, `Organizer of ${event.title}`);
});

console.log(eventOrganizers.get(events[0]));  

console.table(events.map(({ title, date, location }) => ({ title, date, location })));

function addAttendee(eventTitle, attendeeName) {
    let event = events.find(e => e.title === eventTitle);
    if (event) {
        event.attendees.add(attendeeName);
        console.log(`${attendeeName} added to ${eventTitle}`);
    } else {
        console.log("No Event found.");
    }
}

addAttendee("Client Meeting with XYZ Corp", "Riley");
console.log(events.find(e => e.title === "Client Meeting with XYZ Corp").attendees);

let eventsWithCustomJSON = JSON.stringify(events, (key, value) => {
    if (key === "date") {
        return new Date(value).toLocaleDateString("en-US"); 
    }
    if (key === "attendees") {
        return [...value];  
    }
    return value;
}, 2);

console.log(eventsWithCustomJSON);

let firstEvent = events[0];

console.log("Keys:", Object.keys(firstEvent)); 
console.log("Values:", Object.values(firstEvent)); 
console.log("Entries:", Object.entries(firstEvent));  

events.forEach(({ title, date }) => {
    console.log(`Event: ${title}, Date: ${date.toDateString()}`);
});

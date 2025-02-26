function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const dateIdeas = {
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    activity: ['Mini-Golf - cause duh!', 'DIY food kit', 'Rent a dream car and driver!!', 'Berry Picking', 'Drive-in movie', 'Stargazing for shooting stars', 'Roadtrip somewhere new', 'Baseball game at the stadium', 'Escape Room', 'Wrestling', 'Swimming', 'Make and Fly a kite', 'Fishing', 'Photo Shoot/walks', 'Thrift store date/Thrifting', 'Donut Date', 'Dancing class', 'Picnic in the park', 'Picnic in the Beach', 'Beach day will all of the things', 'Bone fire and smores', 'Amusement Park', 'Embroidery', 'Matching blanket making', 'Building your own game', 'Scrapbooking and journaling', 'Art Coffee Dates', 'Caffee Tasting', 'Artsy ideas: poetry, Painting canvases, crocheting, painting on fabric', 'Doing DIY building projects', ' Sky Zone - Trampline park', 'Planting', 'Making pasta from scratch', 'Hiking, so we can watch the sunset a a mountain', 'An outside movie night', 'Camping', 'Bike Rides', 'Visiting flower fields', 'Fondue Night', 'Archery', 'Arcade', 'Aquarium', 'Art Museum', 'Amusement Park', 'Axe Throwing', 'Shooting Range', 'Air soft', 'Shooting Range', 'Bowling', 'Boxing class', 'Board Game Night', 'Bath', 'Boat Ride', 'Brunch Dates', 'Comedy gig', 'Stay in a Cabin', 'Circus', 'Cenema', 'Concert', 'Double Date', 'Day Trip', 'Dinner Date', 'Exchange Gifts', 'Festival', 'Fireworks', 'Food Tour', 'GO Karing', 'Game Night', 'Golf Course', 'Hot Air Ballon', 'Horse Ridding', 'Crash a Party', 'Ice skating', 'Jet skiing', 'Jewelry Making', 'Junk Food', 'Jazz Club', 'Clubbing', 'Kayaking', 'Knock something random of a bucket list', 'Kite-Surfing', 'Live Music', 'Laser Tag', 'Karoaking', 'Massage/Spa', 'Nature Walk', 'Netflix and chill', 'Opera', 'Obstacle Course', 'Observatory', 'Poetry Class', 'Painting', 'Pedicures', 'Photo Shoot/ Profesionally', 'Pumking patch', 'Road trip', 'Roller Skating', 'Rock Climbing', 'Rooftop Dining', 'Spa Day', 'Sky Diving', 'Sunrise Date', 'Sunset Date', 'Science Museum', 'Surprise Gift Shoping', 'Theatre', 'Take a cooking class', 'Unpluggged Night(No Electronics)', 'Unwind - just chill', 'Vineyard', 'Volenteering at Mousque', 'Visit another Country', 'Water Park', 'Workout Together', 'Walking Tour', 'Yoga', 'Zoo', 'Zip Line', 'Visit a BookRoom', 'Read Together', 'Learn Something Together', 'Paint Each Other', 'Trivia Night', 'Write a Song/Poem', 'Make a Time Capsule', 'Do a touristy things', 'Do Colroing Page', 'Quiz Each Other', 'Visit a gallery/Art Show', 'Do a home makeover', 'Put togethter a puzzle', 'Caving'],
    food: ['Turkish', 'Taco', 'Dinner', 'ChickFil-A', 'Sushi', 'Korean', 'Italian', 'Street-Food', 'McDonalds', 'KFC',]
};

let personalizedDate = [];

for(let item in dateIdeas) {
    let date = generateRandomNumber(dateIdeas[item].length);

    switch(item) {
        case 'day':
            personalizedDate.push(`We will go on a date on ${dateIdeas[item][date]}`)
            break
        case 'activity':
            personalizedDate.push(`We will go/do on ${dateIdeas[item][date]}`)
            break
        case 'food':
            personalizedDate.push(`We will eat at a ${dateIdeas[item][date]} resturant`)
            break
        default:
            personalizedDate.push('Just walk away now - dont be wasting your time now borther')
    }
}

function formatDate(dates) {
    const formatted = personalizedDate.join('\n')
    console.log(formatted)
}

formatDate(personalizedDate);


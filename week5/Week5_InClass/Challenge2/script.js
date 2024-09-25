// DO NOT MODIFY THIS METHOD
//   Except if you need to modify the api_endpoint (e.g. using a different HTTP port such as 8888)
function get_all() {

    console.log("**** [START] get_all() *****");

    let arr =
        [
            {
            "id": 10001,
            "name": "Brandon Single",
            "age": 56,
            "gender": "M",
            "occupation": "Journalist",
            "city": "New York",
            "photo_url": "/krazydating/photos/brandon.png",
            "quote": "Fitness enthusiast with a soft spot for pizza. Can we be workout buddies...and cheat day partners?"
            },
            {
            "id": 10002,
            "name": "Chein Mingle",
            "age": 23,
            "gender": "M",
            "occupation": "Musician",
            "city": "Sydney",
            "photo_url": "/krazydating/photos/chein.png",
            "quote": "Bringing good vibes and spicy ramen to the table. Let's swap playlists and life stories."
            },
            {
            "id": 10003,
            "name": "Darryl Oppa",
            "age": 34,
            "gender": "M",
            "occupation": "HR Professional",
            "city": "Los Angeles",
            "photo_url": "/krazydating/photos/darryl.png",
            "quote": "Adventurer by day, Netflix aficionado by night - looking for someone to explore both sides with."
            },
            {
            "id": 10004,
            "name": "Nick Kim",
            "age": 22,
            "gender": "M",
            "occupation": "Architect",
            "city": "Pyongyang",
            "photo_url": "/krazydating/photos/nick.png",
            "quote": "Dog dad, coffee lover, and always down for a spontaneous road trip. Let's make life an adventure."
            },
            {
            "id": 10005,
            "name": "Ryan Lala",
            "age": 27,
            "gender": "M",
            "occupation": "Dancer",
            "city": "London",
            "photo_url": "/krazydating/photos/ryan.png",
            "quote": "Sarcasm is my love language, but I promise I'm serious about finding someone special."
            },
            {
            "id": 10006,
            "name": "Zac Bundy",
            "age": 43,
            "gender": "M",
            "occupation": "Customer Success Manager",
            "city": "Hong Kong",
            "photo_url": "/krazydating/photos/zac.png",
            "quote": "Part-time musician, full-time dreamer. Let's create a life with epic soundtracks and good vibes."
            },
            {
            "id": 10007,
            "name": "Eric Tan",
            "age": 20,
            "gender": "M",
            "occupation": "Software Engineer",
            "city": "Singapore",
            "photo_url": "/krazydating/photos/eric.png",
            "quote": "Lost in a crowd but still feeling alone - maybe you're the connection I've been looking for."
            },
            {
            "id": 10008,
            "name": "Doug Toe",
            "age": 37,
            "gender": "M",
            "occupation": "Accountant",
            "city": "Helsinki",
            "photo_url": "/krazydating/photos/doug.png",
            "quote": "Got the house, now just looking for someone to make it a home - ready to move in?"
            },
            {
            "id": 10009,
            "name": "Mike Tyson",
            "age": 58,
            "gender": "M",
            "occupation": "Boxer",
            "city": "Las Vegas",
            "photo_url": "/krazydating/photos/mike.png",
            "quote": "Punching through life with strength and heart. Looking for someone to stand in my corner."
            },
            {
            "id": 10010,
            "name": "Joe Black",
            "age": 30,
            "gender": "M",
            "occupation": "Photographer",
            "city": "Paris",
            "photo_url": "/krazydating/photos/joe.png",
            "quote": "Capturing moments and chasing sunsets. Let's create a picture-perfect story together."
            },
            {
            "id": 10011,
            "name": "Buck Niceman",
            "age": 29,
            "gender": "M",
            "occupation": "Carpenter",
            "city": "Toronto",
            "photo_url": "/krazydating/photos/buck.png",
            "quote": "Building a life full of love, laughter, and the perfect wooden furniture. Ready to join?"
            },
            {
            "id": 10012,
            "name": "Kenny Dear",
            "age": 25,
            "gender": "M",
            "occupation": "Barista",
            "city": "Melbourne",
            "photo_url": "/krazydating/photos/kenny.png",
            "quote": "Brewing the perfect cup of coffee, but missing the perfect company to share it with."
            },
            {
            "id": 10013,
            "name": "Bill Clinton",
            "age": 77,
            "gender": "M",
            "occupation": "Public Speaker",
            "city": "Washington D.C.",
            "photo_url": "/krazydating/photos/bill.png",
            "quote": "A former president with a passion for storytelling. Let's write the next chapter together."
            },
            {
            "id": 10014,
            "name": "Eddie Peng",
            "age": 41,
            "gender": "M",
            "occupation": "Actor",
            "city": "Taipei",
            "photo_url": "/krazydating/photos/eddie.png",
            "quote": "Lights, camera, romance! Looking for someone to share the spotlight with."
            },
            {
            "id": 10015,
            "name": "Jim Halpert",
            "age": 24,
            "gender": "M",
            "occupation": "Graphic Designer",
            "city": "Miami",
            "photo_url": "/krazydating/photos/justin.png",
            "quote": "Designing a life of creativity and fun - hoping to find someone to add the final touch."
            },
            {
            "id": 10016,
            "name": "Bob Builder",
            "age": 35,
            "gender": "M",
            "occupation": "Construction Worker",
            "city": "Chicago",
            "photo_url": "/krazydating/photos/bob.png",
            "quote": "Let's build something lasting together, one brick at a time."
            },
            {
            "id": 10017,
            "name": "Adam Song",
            "age": 28,
            "gender": "M",
            "occupation": "Musician",
            "city": "Seoul",
            "photo_url": "/krazydating/photos/adam.png",
            "quote": "Music is life. If you want to duet in love and harmony, I'm your guy."
            },
            {
            "id": 10018,
            "name": "Frank Hyung",
            "age": 39,
            "gender": "M",
            "occupation": "Chef",
            "city": "San Francisco",
            "photo_url": "/krazydating/photos/frank.png",
            "quote": "Cooking up something special, and all I need is the right person to share it with."
            },
            {
            "id": 20001,
            "name": "Yin Kit Catwater",
            "age": 22,
            "gender": "F",
            "occupation": "Hacker",
            "city": "Paris",
            "photo_url": "/krazydating/photos/yinkit.png",
            "quote": "Quiet nights in with a good movie or exploring the city — I'm down for both. Bonus points if you love cats."
            },
            {
            "id": 20002,
            "name": "Supreme Woman",
            "age": 55,
            "gender": "F",
            "occupation": "Unemployed",
            "city": "Seoul",
            "photo_url": "/krazydating/photos/supreme.png",
            "quote": "I run on good coffee, great books, and even better conversations. Let's keep it classy and quirky."
            },
            {
            "id": 20003,
            "name": "Emily Prada",
            "age": 35,
            "gender": "F",
            "occupation": "Financial Consultant",
            "city": "Moscow",
            "photo_url": "/krazydating/photos/emily.png",
            "quote": "If we laugh together, we'll probably get along. Dog lover, sushi enthusiast, and trivia champion."
            },
            {
            "id": 20004,
            "name": "Bingbing Fong",
            "age": 41,
            "gender": "F",
            "occupation": "High School Teacher",
            "city": "Beijing",
            "photo_url": "/krazydating/photos/bingbing.png",
            "quote": "Creative soul with a love for art, music, and meaningful conversations. Beep me if you're the same."
            },
            {
            "id": 20005,
            "name": "Ananya Bae",
            "age": 24,
            "gender": "F",
            "occupation": "Stunt Actor",
            "city": "Dubai",
            "photo_url": "/krazydating/photos/ananya.png",
            "quote": "Jet-setter with a heart for meaningful connections. Click on me if you believe in love and adventure."
            },
            {
            "id": 20006,
            "name": "Suzy Lee",
            "age": 20,
            "gender": "F",
            "occupation": "Student",
            "city": "Singapore",
            "photo_url": "/krazydating/photos/suzy.png",
            "quote": "Ambitious by day, a hopeless romantic by night. Looking for someone who can handle both."
            },
            {
            "id": 20007,
            "name": "Feebee Potato",
            "age": 20,
            "gender": "F",
            "occupation": "Chef",
            "city": "New Orleans",
            "photo_url": "/krazydating/photos/feebee.png",
            "quote": "Chasing dreams and sunsets, but still waiting for someone to chase them with me."
            },
            {
            "id": 20008,
            "name": "Marie Claire",
            "age": 32,
            "gender": "F",
            "occupation": "Journalist",
            "city": "London",
            "photo_url": "/krazydating/photos/marie.png",
            "quote": "Storytelling is my passion, and I'm always chasing the next big adventure. Looking for a partner who shares my curiosity."
            },
            {
            "id": 20009,
            "name": "Wendy Burger",
            "age": 28,
            "gender": "F",
            "occupation": "Chef",
            "city": "New York",
            "photo_url": "/krazydating/photos/wendy.png",
            "quote": "Cooking up gourmet meals and good vibes. If you're hungry for love, I'm ready to serve."
            },
            {
            "id": 20010,
            "name": "Tiffany Trump",
            "age": 30,
            "gender": "F",
            "occupation": "Lawyer",
            "city": "Washington D.C.",
            "photo_url": "/krazydating/photos/tiffany.png",
            "quote": "Legal expert by day, fashionista by night. Seeking someone who can keep up with my high-flying lifestyle."
            },
            {
            "id": 20011,
            "name": "Elizabeth Taylor",
            "age": 35,
            "gender": "F",
            "occupation": "Actress",
            "city": "Los Angeles",
            "photo_url": "/krazydating/photos/elizabeth.png",
            "quote": "Old Hollywood glamour meets modern-day ambition. Looking for someone who can sweep me off my feet."
            },
            {
            "id": 20012,
            "name": "Mariah Carey",
            "age": 54,
            "gender": "F",
            "occupation": "Singer",
            "city": "New York",
            "photo_url": "/krazydating/photos/mariah.png",
            "quote": "Living in a world of melodies and high notes. If you're ready for a diva, let's make beautiful music together."
            },
            {
            "id": 20013,
            "name": "Diana Ross",
            "age": 80,
            "gender": "F",
            "occupation": "Singer",
            "city": "Detroit",
            "photo_url": "/krazydating/photos/diana.png",
            "quote": "Still singing the hits and living life like a Motown queen. Join me on this soulful journey."
            },
            {
            "id": 20014,
            "name": "Hillary Rodham",
            "age": 76,
            "gender": "F",
            "occupation": "Politician",
            "city": "New York",
            "photo_url": "/krazydating/photos/hillary.png",
            "quote": "Strong, determined, and always ready for a challenge. Seeking someone who can match my drive and passion."
            },
            {
            "id": 20015,
            "name": "Nancy Pelosi",
            "age": 83,
            "gender": "F",
            "occupation": "Politician",
            "city": "San Francisco",
            "photo_url": "/krazydating/photos/nancy.png",
            "quote": "A lifetime of leadership and service. Looking for someone who believes in partnership and progress."
            },
            {
            "id": 20016,
            "name": "Victoria Beckham",
            "age": 49,
            "gender": "F",
            "occupation": "Fashion Designer",
            "city": "London",
            "photo_url": "/krazydating/photos/victoria.png",
            "quote": "Fashion-forward and business-savvy. Let's walk the runway of life together."
            },
            {
            "id": 20017,
            "name": "Britney Spears",
            "age": 42,
            "gender": "F",
            "occupation": "Performer",
            "city": "Las Vegas",
            "photo_url": "/krazydating/photos/britney.png",
            "quote": "A pop icon looking for someone who can keep up with my moves. Let's make this a toxic-free love story."
            },
            {
            "id": 20017,
            "name": "April Mak",
            "age": 18,
            "gender": "F",
            "occupation": "Guitarist",
            "city": "Osaka",
            "photo_url": "/krazydating/photos/april.png",
            "quote": "April may be my name, but I'm here to make your whole year brighter!"
            }
        ];

    populate_cards(arr);

    console.log("**** [END] get_all() *****");
}


async function populate_cards(profile_array) {

    console.log("**** [START] populate_cards() *****");

    //============================================================================
    // Task 1
    // In this task, for convenience and simplicity, use Template Literals to
    //   craft a String that contains HTML code.
    // 
    // This means - you do NOT have to use create element, create text node,
    //   append child methods.
    //============================================================================

    let result_str = ''; // Use this as a Template Literals string. Append to this.

    // YOUR CODE GOES HERE
    // console.log(profile_array)
    for (profile_obj of profile_array) {
        // Quote, Name, Age, Gender, Occupation
        let profile_img = profile_obj['photo_url'];
        let profile_name = profile_obj['name'];
        let profile_occupation = profile_obj['occupation'];
        let profile_quote = profile_obj['quote'];   
        let colour = '';
        if (profile_obj['gender'] == 'M') {
            colour = 'blue';
        }
        else {
            colour = 'pink';
        }
        console.log(profile_img);

        let profile_str = `
            <div class="card h-100 ${colour}">
                <span class="age-pill badge rounded-pill bg-warning text-black position-absolute top-0 end-0 m-2">34</span>
                <img src="../${profile_img}" class="card-img-top" alt="${profile_name}">
                <div class="card-body">
                    <h5 class="card-title">${profile_name}</h5>
                    <h6><span class="badge text-bg-info">${profile_occupation}</span></h6>
                    <p class="card-text fst-italic">${profile_quote}</p>
                </div>
            </div>
        `;

        result_str += profile_str
    }

    // DO NOT MODIFY THIS LINE (USE THIS AS IS)
    document.getElementById('my-cards').innerHTML = result_str;

    console.log("**** [END] populate_cards() *****");
}


// Parameter gender can take on the value of:
//   'f' for females
//   'm' for males
function get_by_gender(gender) {
    console.log("**** [START] get_by_gender() *****");

    //============================================================================
    // Task 2
    // In this task, use Axios to make an asynchronous API call.
    // Go to the Krazy Dating API documentation and find out which API endpoint
    //   is the most suitable one to use in this case.
    // Make use of the code from get_all() function.
    //============================================================================

    // YOUR CODE GOES HERE

    let gender_array = [];

    if (gender == 'm') {
        gender_array = [
            {
            "id": 10001,
            "name": "Brandon Single",
            "age": 56,
            "gender": "M",
            "occupation": "Journalist",
            "city": "New York",
            "photo_url": "/krazydating/photos/brandon.png",
            "quote": "Fitness enthusiast with a soft spot for pizza. Can we be workout buddies...and cheat day partners?"
            },
            {
            "id": 10002,
            "name": "Chein Mingle",
            "age": 23,
            "gender": "M",
            "occupation": "Musician",
            "city": "Sydney",
            "photo_url": "/krazydating/photos/chein.png",
            "quote": "Bringing good vibes and spicy ramen to the table. Let's swap playlists and life stories."
            },
            {
            "id": 10003,
            "name": "Darryl Oppa",
            "age": 34,
            "gender": "M",
            "occupation": "HR Professional",
            "city": "Los Angeles",
            "photo_url": "/krazydating/photos/darryl.png",
            "quote": "Adventurer by day, Netflix aficionado by night - looking for someone to explore both sides with."
            },
            {
            "id": 10004,
            "name": "Nick Kim",
            "age": 22,
            "gender": "M",
            "occupation": "Architect",
            "city": "Pyongyang",
            "photo_url": "/krazydating/photos/nick.png",
            "quote": "Dog dad, coffee lover, and always down for a spontaneous road trip. Let's make life an adventure."
            },
            {
            "id": 10005,
            "name": "Ryan Lala",
            "age": 27,
            "gender": "M",
            "occupation": "Dancer",
            "city": "London",
            "photo_url": "/krazydating/photos/ryan.png",
            "quote": "Sarcasm is my love language, but I promise I'm serious about finding someone special."
            },
            {
            "id": 10006,
            "name": "Zac Bundy",
            "age": 43,
            "gender": "M",
            "occupation": "Customer Success Manager",
            "city": "Hong Kong",
            "photo_url": "/krazydating/photos/zac.png",
            "quote": "Part-time musician, full-time dreamer. Let's create a life with epic soundtracks and good vibes."
            },
            {
            "id": 10007,
            "name": "Eric Tan",
            "age": 20,
            "gender": "M",
            "occupation": "Software Engineer",
            "city": "Singapore",
            "photo_url": "/krazydating/photos/eric.png",
            "quote": "Lost in a crowd but still feeling alone - maybe you're the connection I've been looking for."
            },
            {
            "id": 10008,
            "name": "Doug Toe",
            "age": 37,
            "gender": "M",
            "occupation": "Accountant",
            "city": "Helsinki",
            "photo_url": "/krazydating/photos/doug.png",
            "quote": "Got the house, now just looking for someone to make it a home - ready to move in?"
            },
            {
            "id": 10009,
            "name": "Mike Tyson",
            "age": 58,
            "gender": "M",
            "occupation": "Boxer",
            "city": "Las Vegas",
            "photo_url": "/krazydating/photos/mike.png",
            "quote": "Punching through life with strength and heart. Looking for someone to stand in my corner."
            },
            {
            "id": 10010,
            "name": "Joe Black",
            "age": 30,
            "gender": "M",
            "occupation": "Photographer",
            "city": "Paris",
            "photo_url": "/krazydating/photos/joe.png",
            "quote": "Capturing moments and chasing sunsets. Let's create a picture-perfect story together."
            },
            {
            "id": 10011,
            "name": "Buck Niceman",
            "age": 29,
            "gender": "M",
            "occupation": "Carpenter",
            "city": "Toronto",
            "photo_url": "/krazydating/photos/buck.png",
            "quote": "Building a life full of love, laughter, and the perfect wooden furniture. Ready to join?"
            },
            {
            "id": 10012,
            "name": "Kenny Dear",
            "age": 25,
            "gender": "M",
            "occupation": "Barista",
            "city": "Melbourne",
            "photo_url": "/krazydating/photos/kenny.png",
            "quote": "Brewing the perfect cup of coffee, but missing the perfect company to share it with."
            },
            {
            "id": 10013,
            "name": "Bill Clinton",
            "age": 77,
            "gender": "M",
            "occupation": "Public Speaker",
            "city": "Washington D.C.",
            "photo_url": "/krazydating/photos/bill.png",
            "quote": "A former president with a passion for storytelling. Let's write the next chapter together."
            },
            {
            "id": 10014,
            "name": "Eddie Peng",
            "age": 41,
            "gender": "M",
            "occupation": "Actor",
            "city": "Taipei",
            "photo_url": "/krazydating/photos/eddie.png",
            "quote": "Lights, camera, romance! Looking for someone to share the spotlight with."
            },
            {
            "id": 10015,
            "name": "Jim Halpert",
            "age": 24,
            "gender": "M",
            "occupation": "Graphic Designer",
            "city": "Miami",
            "photo_url": "/krazydating/photos/justin.png",
            "quote": "Designing a life of creativity and fun - hoping to find someone to add the final touch."
            },
            {
            "id": 10016,
            "name": "Bob Builder",
            "age": 35,
            "gender": "M",
            "occupation": "Construction Worker",
            "city": "Chicago",
            "photo_url": "/krazydating/photos/bob.png",
            "quote": "Let's build something lasting together, one brick at a time."
            },
            {
            "id": 10017,
            "name": "Adam Song",
            "age": 28,
            "gender": "M",
            "occupation": "Musician",
            "city": "Seoul",
            "photo_url": "/krazydating/photos/adam.png",
            "quote": "Music is life. If you want to duet in love and harmony, I'm your guy."
            },
            {
            "id": 10018,
            "name": "Frank Hyung",
            "age": 39,
            "gender": "M",
            "occupation": "Chef",
            "city": "San Francisco",
            "photo_url": "/krazydating/photos/frank.png",
            "quote": "Cooking up something special, and all I need is the right person to share it with."
            }
        ];
    }
    else {
        gender_array = [
            {
            "id": 20001,
            "name": "Yin Kit Catwater",
            "age": 22,
            "gender": "F",
            "occupation": "Hacker",
            "city": "Paris",
            "photo_url": "/krazydating/photos/yinkit.png",
            "quote": "Quiet nights in with a good movie or exploring the city — I'm down for both. Bonus points if you love cats."
            },
            {
            "id": 20002,
            "name": "Supreme Woman",
            "age": 55,
            "gender": "F",
            "occupation": "Unemployed",
            "city": "Seoul",
            "photo_url": "/krazydating/photos/supreme.png",
            "quote": "I run on good coffee, great books, and even better conversations. Let's keep it classy and quirky."
            },
            {
            "id": 20003,
            "name": "Emily Prada",
            "age": 35,
            "gender": "F",
            "occupation": "Financial Consultant",
            "city": "Moscow",
            "photo_url": "/krazydating/photos/emily.png",
            "quote": "If we laugh together, we'll probably get along. Dog lover, sushi enthusiast, and trivia champion."
            },
            {
            "id": 20004,
            "name": "Bingbing Fong",
            "age": 41,
            "gender": "F",
            "occupation": "High School Teacher",
            "city": "Beijing",
            "photo_url": "/krazydating/photos/bingbing.png",
            "quote": "Creative soul with a love for art, music, and meaningful conversations. Beep me if you're the same."
            },
            {
            "id": 20005,
            "name": "Ananya Bae",
            "age": 24,
            "gender": "F",
            "occupation": "Stunt Actor",
            "city": "Dubai",
            "photo_url": "/krazydating/photos/ananya.png",
            "quote": "Jet-setter with a heart for meaningful connections. Click on me if you believe in love and adventure."
            },
            {
            "id": 20006,
            "name": "Suzy Lee",
            "age": 20,
            "gender": "F",
            "occupation": "Student",
            "city": "Singapore",
            "photo_url": "/krazydating/photos/suzy.png",
            "quote": "Ambitious by day, a hopeless romantic by night. Looking for someone who can handle both."
            },
            {
            "id": 20007,
            "name": "Feebee Potato",
            "age": 20,
            "gender": "F",
            "occupation": "Chef",
            "city": "New Orleans",
            "photo_url": "/krazydating/photos/feebee.png",
            "quote": "Chasing dreams and sunsets, but still waiting for someone to chase them with me."
            },
            {
            "id": 20008,
            "name": "Marie Claire",
            "age": 32,
            "gender": "F",
            "occupation": "Journalist",
            "city": "London",
            "photo_url": "/krazydating/photos/marie.png",
            "quote": "Storytelling is my passion, and I'm always chasing the next big adventure. Looking for a partner who shares my curiosity."
            },
            {
            "id": 20009,
            "name": "Wendy Burger",
            "age": 28,
            "gender": "F",
            "occupation": "Chef",
            "city": "New York",
            "photo_url": "/krazydating/photos/wendy.png",
            "quote": "Cooking up gourmet meals and good vibes. If you're hungry for love, I'm ready to serve."
            },
            {
            "id": 20010,
            "name": "Tiffany Trump",
            "age": 30,
            "gender": "F",
            "occupation": "Lawyer",
            "city": "Washington D.C.",
            "photo_url": "/krazydating/photos/tiffany.png",
            "quote": "Legal expert by day, fashionista by night. Seeking someone who can keep up with my high-flying lifestyle."
            },
            {
            "id": 20011,
            "name": "Elizabeth Taylor",
            "age": 35,
            "gender": "F",
            "occupation": "Actress",
            "city": "Los Angeles",
            "photo_url": "/krazydating/photos/elizabeth.png",
            "quote": "Old Hollywood glamour meets modern-day ambition. Looking for someone who can sweep me off my feet."
            },
            {
            "id": 20012,
            "name": "Mariah Carey",
            "age": 54,
            "gender": "F",
            "occupation": "Singer",
            "city": "New York",
            "photo_url": "/krazydating/photos/mariah.png",
            "quote": "Living in a world of melodies and high notes. If you're ready for a diva, let's make beautiful music together."
            },
            {
            "id": 20013,
            "name": "Diana Ross",
            "age": 80,
            "gender": "F",
            "occupation": "Singer",
            "city": "Detroit",
            "photo_url": "/krazydating/photos/diana.png",
            "quote": "Still singing the hits and living life like a Motown queen. Join me on this soulful journey."
            },
            {
            "id": 20014,
            "name": "Hillary Rodham",
            "age": 76,
            "gender": "F",
            "occupation": "Politician",
            "city": "New York",
            "photo_url": "/krazydating/photos/hillary.png",
            "quote": "Strong, determined, and always ready for a challenge. Seeking someone who can match my drive and passion."
            },
            {
            "id": 20015,
            "name": "Nancy Pelosi",
            "age": 83,
            "gender": "F",
            "occupation": "Politician",
            "city": "San Francisco",
            "photo_url": "/krazydating/photos/nancy.png",
            "quote": "A lifetime of leadership and service. Looking for someone who believes in partnership and progress."
            },
            {
            "id": 20016,
            "name": "Victoria Beckham",
            "age": 49,
            "gender": "F",
            "occupation": "Fashion Designer",
            "city": "London",
            "photo_url": "/krazydating/photos/victoria.png",
            "quote": "Fashion-forward and business-savvy. Let's walk the runway of life together."
            },
            {
            "id": 20017,
            "name": "Britney Spears",
            "age": 42,
            "gender": "F",
            "occupation": "Performer",
            "city": "Las Vegas",
            "photo_url": "/krazydating/photos/britney.png",
            "quote": "A pop icon looking for someone who can keep up with my moves. Let's make this a toxic-free love story."
            },
            {
            "id": 20017,
            "name": "April Mak",
            "age": 18,
            "gender": "F",
            "occupation": "Guitarist",
            "city": "Osaka",
            "photo_url": "/krazydating/photos/april.png",
            "quote": "April may be my name, but I'm here to make your whole year brighter!"
            }
        ];
    }

    populate_cards(gender_array);

    console.log("**** [END] get_by_gender() *****");
}
// Random Joke
document.getElementById('jokeBtn').addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        document.getElementById('jokeText').textContent = data.joke || (data.setup + " " + data.delivery);
    });
});

// Random Dog Image
document.getElementById('dogBtn').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dogImage').src = data.message;
    });
});

// Random Cat Fact
document.getElementById('catBtn').addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        document.getElementById('catFact').textContent = data.fact;
    });
});

// Current Bitcoin Price (in USD)
document.getElementById('btcBtn').addEventListener('click', function() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('btcPrice').textContent = "Current Bitcoin Price: $" + data.bpi.USD.rate;
    });
});

// Random User Data
document.getElementById('userBtn').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        let user = data.results[0];
        document.getElementById('userData').textContent = `${user.name.first} ${user.name.last}, Email: ${user.email}`;
    });
});

// Astronomy Picture of the Day (You would need an API key from NASA for this)
document.getElementById('apodBtn').addEventListener('click', function() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=uo5iNpW7pEbYU4JrqI5o4cGZAlQle8zDsS6ZqESi')
    .then(response => response.json())
    .then(data => {
        document.getElementById('apodImage').src = data.url;
    });
});

document.getElementById('fetchCharacterBtn').addEventListener('click', fetchRandomCharacter);

function fetchRandomCharacter() {
    const randomId = Math.floor(Math.random() * 83) + 1;  // There are currently 83 characters in SWAPI
    fetch(`https://swapi.dev/api/people/${randomId}/`)
        .then(response => response.json())
        .then(character => {
            displayCharacterInfo(character);
        })
        .catch(error => {
            console.error('Error fetching character:', error);
        });
}

function displayCharacterInfo(character) {
    const characterInfo = `
        <h2>${character.name}</h2>
        <p><strong>Height:</strong> ${character.height} cm</p>
        <p><strong>Mass:</strong> ${character.mass} kg</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
    `;
    document.getElementById('characterInfo').innerHTML = characterInfo;
}

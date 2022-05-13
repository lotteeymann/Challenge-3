// OpenWeather
function getAPIdataWeather() {

    // construct request
    var request = 'https://api.openweathermap.org/data/2.5/weather?lat=52.122981870451326&lon=5.3827097015367285&appid=7fc21fb9ec63266e22bf47c6bd4a1e1a';

    // get current weather
    fetch(request)

    // parse response to JSON format
    .then(function(response) {
        return response.json();
    })

    // do something with response
    .then(function(response) {
        // show full JSON object
        var weatherBox = document.getElementById('weer');
        weatherBox.innerHTML = (response.main.temp - 273.15).toFixed(0) + ' &#730;C';
    });
}

function getAPIdataWeatherMars() {

    // construct request
    var requestMars = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';

    // get current weather
    fetch(requestMars)

    // parse response to JSON format
    .then(function(responseMars) {
        return responseMars.json();
    })

    // do something with response
    .then(function(responseMars) {
        // show full JSON object
        console.log(responseMars);
    });
}

// init data stream
getAPIdataWeather();
getAPIdataWeatherMars();
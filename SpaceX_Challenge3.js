
//Mapbox first API
// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibG90dGVleW1hbm4iLCJhIjoiY2wzNG5tdmRiMDJxdjNjcXI2OWEzNHlzcyJ9._xGhbAcD67c5JHP-KheTow';

// Initialate map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lotteeymann/cl34nty5g005f14qqb597tftk',
    center: [5.3827097015367285, 52.122981870451326],
    zoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup().setHTML('<h3>You will land here</h3><p>It is a beautiful location. It is right in the middle of a forest. There is a big field that we use for our landing. After our exciting journey to mars, you can relax in a calm and relaxing environment. Outside the forest is also a city where you can easily book a hotel, get something to eat or travel back home. </p><img src="images/landing.png" alt="Italian Trulli" style="width:100%;height:100%;">');

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker()
    .setLngLat([5.3827097015367285, 52.122981870451326])
    .setPopup(popup)
    .addTo(map);

map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': myLocationsList
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });
});

// OpenWeather second API
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

// init data stream
getAPIdataWeather();

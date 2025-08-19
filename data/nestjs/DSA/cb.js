/*
cb is special function which call after other function
*/

// function getWeather(city) {
//     const coords = {
//         delhi: { lat: 28.6, lon: 77.2 },
//         mumbai: { lat: 19.0, lon: 72.8 },
//         london: { lat: 51.5, lon: -0.1 }
//     };

//     const { lat, lon } = coords[city.toLowerCase()];

//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//     return fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             const temp = data.current_weather.temperature;
//             console.log(`Current temperature in ${city}: ${temp}°C`);
//         })
//         .catch(err => console.error("Error fetching weather:", err));
// }

// getWeather("Delhi");


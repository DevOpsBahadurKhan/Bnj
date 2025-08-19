const apiKey = '7a38d7b4baca7f60c3dd387501f2760a'; 

document.getElementById('search-btn').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value;
  if (!city) return alert("Please enter a city!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
console.log(data);

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('weather-result').classList.remove('hidden');
  } catch (err) {
    alert(err.message);
  }
});

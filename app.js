window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let icon = document.querySelector(".location img");
  console.log(icon);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/forecast.json?key=babdd47a1ed0407ba32103446220507&q=${lat},${long}&days=1&aqi=no&alerts=no`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const { temp_c, condition } = data.current;
          temperatureDegree.textContent = temp_c;
          temperatureDescription.textContent = condition.text;
          locationTimezone.textContent = data.location.tz_id;
          icon.src = `${condition.icon}`;
        });
    });
  }
});

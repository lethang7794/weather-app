import React from 'react';

const WeatherCard = ({ data, scale }) => {
  const city = data.name;
  const country = data.sys.country;
  const weatherDescription = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  // Convert from Kelvin degree to Celsius degree: °C = °K - 273.15
  const toCelsius = (degreeKelvin) => Math.round(degreeKelvin - 273.15); // Round to the nearest number (up)

  // Convert from Kelvin degree to Fahrenheit degree: °F = (°K − 273.15) × 9/5 + 32
  const toFahrenheit = (degreeKelvin) =>
    Math.round(((degreeKelvin - 273.15) * 9) / 5 + 32);

  const celsiusDegree = toCelsius(data.main.temp);
  const fahrenheitDegree = toFahrenheit(data.main.temp);

  return (
    <div className="WeatherCard">
      <div className="location">
        {city}, {country}
      </div>
      {/* <div className="icon">
        <img src={iconURL} alt={weatherDescription} />
      </div> */}
      <div className="temperature">
        <span className="degree">{celsiusDegree}°</span>
        <span className="unit">C</span>
        <span className="divisor"> / </span>
        <span className="degree">{fahrenheitDegree}°</span>
        <span className="unit">F</span>
      </div>
      <div
        className="bgIcon"
        style={{ backgroundImage: `url(${iconURL})` }}
      ></div>
      <div className="description">{weatherDescription}</div>
    </div>
  );
};

export default WeatherCard;

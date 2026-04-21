const axios = require('axios');

const getWeatherByLocation = async ({ lat, lng }) => {
  const baseUrl = 'https://api.open-meteo.com/v1/forecast';
  const params = {
    latitude: lat,
    longitude: lng,
    hourly: 'precipitation',
    forecast_days: 1,
    timezone: 'Africa/Luanda',
  };

  const response = await axios.get(baseUrl, { params });
  const hourly = response.data?.hourly?.precipitation || [];
  const rainfallMm = hourly.reduce((sum, value) => sum + Number(value || 0), 0);

  return {
    provider: 'Open-Meteo',
    rainfallMm,
    raw: response.data,
  };
};

module.exports = { getWeatherByLocation };

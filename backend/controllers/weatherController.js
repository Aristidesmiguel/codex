const { getWeatherByLocation } = require('../services/weatherService');

const getWeather = async (req, res, next) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ message: 'Parâmetros lat e lng são obrigatórios.' });
    }

    const weather = await getWeatherByLocation({ lat: Number(lat), lng: Number(lng) });
    return res.json(weather);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getWeather };

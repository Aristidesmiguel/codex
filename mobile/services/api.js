const API_URL = process.env.EXPO_PUBLIC_SIMAI_API || 'http://localhost:4000';

export const getWeather = async (lat, lng) => {
  const response = await fetch(`${API_URL}/weather?lat=${lat}&lng=${lng}`);
  return response.json();
};

export const getAlerts = async (token) => {
  const response = await fetch(`${API_URL}/alerts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.json();
};

export const createReport = async (payload, token) => {
  const response = await fetch(`${API_URL}/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};

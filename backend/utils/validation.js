const isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);

const validateReportPayload = (payload) => {
  const errors = [];

  if (!payload.description || payload.description.length < 10) {
    errors.push('A descrição deve conter pelo menos 10 caracteres.');
  }

  if (!payload.location || !isNumber(payload.location.lat) || !isNumber(payload.location.lng)) {
    errors.push('A localização (lat/lng) é obrigatória.');
  }

  if (!payload.photoUrl) {
    errors.push('A URL da foto é obrigatória.');
  }

  return errors;
};

const validateAlertPayload = (payload) => {
  const errors = [];

  if (!payload.title) errors.push('Título é obrigatório.');
  if (!payload.message) errors.push('Mensagem é obrigatória.');
  if (!payload.riskLevel) errors.push('Nível de risco é obrigatório.');

  return errors;
};

module.exports = {
  validateReportPayload,
  validateAlertPayload,
};

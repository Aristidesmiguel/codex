const { validateAlertPayload } = require('../utils/validation');
const { createAlert, listActiveAlerts } = require('../services/alertService');

const postAlert = async (req, res, next) => {
  try {
    const errors = validateAlertPayload(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const alert = await createAlert({
      ...req.body,
      source: req.body.source || 'admin',
    });

    return res.status(201).json(alert);
  } catch (error) {
    return next(error);
  }
};

const getAlerts = async (_req, res, next) => {
  try {
    const alerts = await listActiveAlerts();
    return res.json(alerts);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  postAlert,
  getAlerts,
};

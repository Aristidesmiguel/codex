const { sendSmsMock, getUssdMenu } = require('../services/telecomService');

const sendSms = async (req, res, next) => {
  try {
    const { phone, message } = req.body;
    if (!phone || !message) {
      return res.status(400).json({ message: 'phone e message são obrigatórios.' });
    }

    const result = await sendSmsMock({ phone, message });
    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

const ussd = (req, res) => {
  const text = req.body.text || req.query.text || '';
  const response = getUssdMenu(text);
  res.type('text/plain').send(response);
};

module.exports = { sendSms, ussd };

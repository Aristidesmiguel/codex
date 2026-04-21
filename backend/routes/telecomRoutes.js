const express = require('express');
const { sendSms, ussd } = require('../controllers/telecomController');

const router = express.Router();

router.post('/sms', sendSms);
router.post('/ussd', ussd);
router.get('/ussd', ussd);

module.exports = router;

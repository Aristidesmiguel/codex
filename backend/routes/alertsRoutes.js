const express = require('express');
const { postAlert, getAlerts } = require('../controllers/alertsController');
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', verifyFirebaseToken, getAlerts);
router.post('/', verifyFirebaseToken, postAlert);

module.exports = router;

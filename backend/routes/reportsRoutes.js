const express = require('express');
const { postReport, getReports } = require('../controllers/reportsController');
const { verifyFirebaseToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', verifyFirebaseToken, postReport);
router.get('/', verifyFirebaseToken, getReports);

module.exports = router;

const { validateReportPayload } = require('../utils/validation');
const { calculateRisk } = require('../utils/riskEngine');
const { createReport, listReports, countRecentReports } = require('../services/reportService');
const { createAlert } = require('../services/alertService');
const { getWeatherByLocation } = require('../services/weatherService');

const postReport = async (req, res, next) => {
  try {
    const errors = validateReportPayload(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const report = await createReport({
      ...req.body,
      userId: req.user?.uid || 'anonymous',
    });

    const weather = await getWeatherByLocation(req.body.location);
    const reportCount = await countRecentReports();
    const risk = calculateRisk({ rainfallMm: weather.rainfallMm, reportCount });

    let autoAlert = null;
    if (risk === 'high' || risk === 'medium') {
      autoAlert = await createAlert({
        title: `Alerta automático SIMAI (${risk.toUpperCase()})`,
        message: `Chuva acumulada ${weather.rainfallMm.toFixed(1)}mm. Reports recentes: ${reportCount}.`,
        riskLevel: risk,
        source: 'ai-engine',
      });
    }

    return res.status(201).json({ report, weather, risk, autoAlert });
  } catch (error) {
    return next(error);
  }
};

const getReports = async (_req, res, next) => {
  try {
    const reports = await listReports();
    return res.json(reports);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  postReport,
  getReports,
};

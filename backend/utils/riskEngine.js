const DEFAULT_THRESHOLDS = {
  mediumRainMm: 20,
  highRainMm: 50,
  highRiskReports: 3,
};

const calculateRisk = ({ rainfallMm, reportCount }, thresholds = DEFAULT_THRESHOLDS) => {
  if (rainfallMm >= thresholds.highRainMm && reportCount >= thresholds.highRiskReports) {
    return 'high';
  }

  if (rainfallMm >= thresholds.mediumRainMm) {
    return 'medium';
  }

  return 'low';
};

module.exports = {
  DEFAULT_THRESHOLDS,
  calculateRisk,
};

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const reportsRoutes = require('./routes/reportsRoutes');
const alertsRoutes = require('./routes/alertsRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const telecomRoutes = require('./routes/telecomRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'SIMAI API' });
});

app.use('/reports', reportsRoutes);
app.use('/alerts', alertsRoutes);
app.use('/weather', weatherRoutes);
app.use('/telecom', telecomRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Erro interno do servidor.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SIMAI API ativa na porta ${PORT}`);
});

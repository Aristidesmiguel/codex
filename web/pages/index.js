import { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import StatCard from '../components/StatCard';
import ReportsTable from '../components/ReportsTable';
import { fetchWithAuth } from '../services/api';

export default function DashboardPage() {
  const [reports, setReports] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('simai_token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    Promise.all([fetchWithAuth('/reports', token), fetchWithAuth('/alerts', token)])
      .then(([reportsData, alertsData]) => {
        setReports(reportsData);
        setAlerts(alertsData);
      })
      .catch(() => {
        window.location.href = '/login';
      });
  }, []);

  const chartData = useMemo(() => {
    const grouped = reports.reduce((acc, report) => {
      const day = new Date(report.createdAt).toLocaleDateString('pt-PT');
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([date, total]) => ({ date, total }));
  }, [reports]);

  return (
    <main className="container" style={{ display: 'grid', gap: 16 }}>
      <h1>SIMAI • Painel Administrativo</h1>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        <StatCard title="Relatórios" value={reports.length} />
        <StatCard title="Alertas ativos" value={alerts.length} color="#dc2626" />
        <StatCard title="Reports pendentes" value={reports.filter((r) => r.status === 'pending').length} color="#f59e0b" />
      </section>

      <div className="card">
        <h3>Estatísticas de reportes</h3>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#1d4ed8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <ReportsTable reports={reports} />

      <div className="card">
        <h3>Ações rápidas</h3>
        <button onClick={() => alert('TODO: aprovação/moderação')}>Moderar reports</button>{' '}
        <button onClick={() => alert('TODO: envio manual de alertas')}>Enviar alerta manual</button>
      </div>
    </main>
  );
}

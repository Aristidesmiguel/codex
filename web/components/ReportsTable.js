export default function ReportsTable({ reports }) {
  return (
    <div className="card">
      <h3>Relatórios enviados</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th align="left">Descrição</th>
            <th align="left">Status</th>
            <th align="left">Data</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.description}</td>
              <td>{report.status}</td>
              <td>{new Date(report.createdAt).toLocaleString('pt-PT')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

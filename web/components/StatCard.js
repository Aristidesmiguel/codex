export default function StatCard({ title, value, color = '#1d4ed8' }) {
  return (
    <div className="card">
      <small>{title}</small>
      <h2 style={{ margin: '8px 0 0', color }}>{value}</h2>
    </div>
  );
}

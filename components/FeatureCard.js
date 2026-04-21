export default function FeatureCard({ title, description, icon }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
        <span className="text-lg">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

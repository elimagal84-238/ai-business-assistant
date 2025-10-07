export default function InfoCard({
  title = "כרטיס מידע",
  subtitle,
  children
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-soft">
      <div className="mb-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-sub">{subtitle}</p>}
      </div>
      {children && <div className="text-sm leading-relaxed">{children}</div>}
    </div>
  );
}

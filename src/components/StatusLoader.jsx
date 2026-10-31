// LOADING state. Grey placeholder cards ("skeletons") shaped like the real
// cards, so the page never goes blank while data is on its way.
// role="status" makes screen readers announce the message.
export default function StatusLoader({ label = 'Receiving transmission…', count = 6, variant = 'card' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <p className="loader__label">
        <span className="loader__pulse" aria-hidden="true" />
        {label}
      </p>
      <div className={variant === 'card' ? 'grid' : 'commanders__grid'} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className={`skeleton skeleton--${variant}`}>
            <div className="skeleton__bar skeleton__bar--short" />
            <div className="skeleton__bar" />
            <div className="skeleton__bar" />
            <div className="skeleton__bar skeleton__bar--mid" />
          </div>
        ))}
      </div>
    </div>
  );
}

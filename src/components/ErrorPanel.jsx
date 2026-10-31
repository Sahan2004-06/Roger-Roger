// ERROR state. Shows a human-readable message and a Retry button.
// role="alert" makes screen readers read it out immediately.
export default function ErrorPanel({ message, onRetry, title = 'Transmission lost' }) {
  return (
    <div className="error" role="alert">
      <p className="error__code">Signal interrupted</p>
      <h3 className="error__title">{title}</h3>
      <p className="error__message">{message}</p>
      <button type="button" className="btn btn--primary" onClick={onRetry}>
        Retry transmission
      </button>
    </div>
  );
}

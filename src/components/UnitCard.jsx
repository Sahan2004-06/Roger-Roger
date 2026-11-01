import DomainIcon from './DomainIcon.jsx';

// One card in the arsenal grid. The whole card is a <button>, so it works
// with a keyboard (Tab to it, Enter to open) as well as with a mouse.
export default function UnitCard({ unit, onSelect }) {
  return (
    <button type="button" className={`card card--${unit.domain}`} onClick={() => onSelect(unit)}>
      <span className="card__top">
        <span className="card__icon">
          <DomainIcon domain={unit.domain} />
        </span>
        <span className="card__tags">
          <span className="tag">{unit.domain}</span>
          <span className="tag tag--muted">{unit.kind}</span>
          {unit.source === 'archive' && <span className="tag tag--archive">Archive</span>}
        </span>
      </span>

      <span className="card__name">{unit.name}</span>
      <span className="card__model">{unit.model}</span>

      <span className="card__stats">
        <span>
          <span className="stat__label">Length</span>
          <span className="stat__value">{formatLength(unit.length)}</span>
        </span>
        <span>
          <span className="stat__label">Crew</span>
          <span className="stat__value">{unit.crew === '0' ? 'None. Fully droid.' : unit.crew}</span>
        </span>
      </span>

      <span className="card__cta">Open dossier</span>
    </button>
  );
}

// SWAPI lengths are metres as text, sometimes "unknown" or "1,600".
export function formatLength(value) {
  if (!value || value === 'unknown' || value === 'n/a') return 'Classified';
  return /^[\d.,]+$/.test(value) ? `${value} m` : value;
}

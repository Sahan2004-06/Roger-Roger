import { useEffect, useRef } from 'react';
import DomainIcon from './DomainIcon.jsx';
import { formatLength } from './UnitCard.jsx';

// The "dossier" pop-up for one unit.
// - Escape closes it (Project 2 lost points because the cart couldn't do this).
// - Clicking the dark backdrop closes it.
// - Focus moves to the Close button on open and returns to the card on close.
export default function UnitDetail({ unit, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // stop the page scrolling behind the dialog

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const rows = [
    ['Class', unit.model],
    ['Manufacturer', unit.manufacturer],
    ['Length', formatLength(unit.length)],
    ['Crew', unit.crew === '0' ? 'None. Fully droid.' : unit.crew],
    ['Top speed', /^\d+$/.test(unit.speed ?? '') ? `${unit.speed} km/h` : unit.speed],
    ['Cost', unit.cost],
  ].filter(([, v]) => v && v !== 'unknown' && v !== 'n/a');

  return (
    <div className="modal" onClick={onClose}>
      <div
        className={`modal__panel card--${unit.domain}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
        onClick={(e) => e.stopPropagation()} // clicks inside the panel shouldn't close it
      >
        <div className="modal__head">
          <span className="card__icon">
            <DomainIcon domain={unit.domain} size={36} />
          </span>
          <div>
            <p className="modal__eyebrow">
              {unit.domain} · {unit.kind} · {unit.source === 'archive' ? 'Archive record' : 'HoloNet record (SWAPI)'}
            </p>
            <h2 id="dossier-title" className="modal__title">{unit.name}</h2>
          </div>
          <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Close dossier">
            ×
          </button>
        </div>

        <p className="modal__blurb">{unit.blurb}</p>

        <dl className="modal__specs">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{label === 'Cost' && /^\d+$/.test(value) ? `${Number(value).toLocaleString()} credits` : value}</dd>
            </div>
          ))}
        </dl>

        <p className="modal__hint">Press Esc to close</p>
      </div>
    </div>
  );
}

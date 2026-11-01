import { DOMAINS } from '../data/arsenal.js';

// Domain filter buttons. aria-pressed tells screen readers which one is
// switched on (Project 2 lost points for toggles that didn't announce this).
export default function FilterBar({ active, onChange, counts }) {
  return (
    <div className="filters" role="group" aria-label="Filter by battle domain">
      {DOMAINS.map((d) => (
        <button
          key={d.id}
          type="button"
          className="chip"
          aria-pressed={active === d.id}
          onClick={() => onChange(d.id)}
        >
          {d.label}
          <span className="chip__count">{counts[d.id] ?? 0}</span>
        </button>
      ))}
    </div>
  );
}

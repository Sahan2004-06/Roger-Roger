import { useMemo, useState } from 'react';
import { useFetch } from '../hooks/useFetch.js';
import { arsenalEntry } from '../data/arsenal.js';
import { ARCHIVE } from '../data/archive.js';
import StatusLoader from '../components/StatusLoader.jsx';
import ErrorPanel from '../components/ErrorPanel.jsx';
import UnitCard from '../components/UnitCard.jsx';
import FilterBar from '../components/FilterBar.jsx';

// Turn one SWAPI vehicle/starship into the shape our cards use,
// or return null if it isn't a Separatist machine.
function fromSwapi(item) {
  const extra = arsenalEntry(item.name);
  if (!extra) return null;
  return {
    name: item.name,
    model: item.vehicle_class || item.starship_class || item.model,
    manufacturer: item.manufacturer,
    length: item.length,
    crew: item.crew,
    speed: item.max_atmosphering_speed,
    cost: item.cost_in_credits,
    source: 'swapi',
    ...extra, // domain, kind, blurb
  };
}

export default function Arsenal({ apiBase }) {
  // Two fetches through the same custom hook: vehicles and starships.
  const vehicles = useFetch(`${apiBase}/vehicles/`, { allPages: true });
  const starships = useFetch(`${apiBase}/starships/`, { allPages: true });

  const [domain, setDomain] = useState('all');

  const loading = vehicles.loading || starships.loading;
  const error = vehicles.error || starships.error;
  const retry = () => {
    if (vehicles.error) vehicles.retry();
    if (starships.error) starships.retry();
  };

  // Combine SWAPI data with the hand-written archive. useMemo means this
  // only re-runs when the fetched data changes, not on every click.
  const units = useMemo(() => {
    if (!vehicles.data || !starships.data) return [];
    const fromApi = [...vehicles.data, ...starships.data].map(fromSwapi).filter(Boolean);
    const fromArchive = ARCHIVE.map((u) => ({ ...u, source: 'archive' }));
    return [...fromApi, ...fromArchive].sort((a, b) => a.name.localeCompare(b.name));
  }, [vehicles.data, starships.data]);

  // How many units per domain, for the numbers on the filter buttons.
  const counts = useMemo(() => {
    const c = { all: units.length };
    units.forEach((u) => (c[u.domain] = (c[u.domain] ?? 0) + 1));
    return c;
  }, [units]);

  // Client-side filtering by domain, applied to data we already fetched.
  const visible = useMemo(
    () => (domain === 'all' ? units : units.filter((u) => u.domain === domain)),
    [units, domain]
  );

  return (
    <section className="section" id="arsenal" aria-labelledby="arsenal-title">
      <header className="section__head">
        <p className="eyebrow">The Arsenal</p>
        <h2 id="arsenal-title" className="section__title">Every machine that marches for freedom</h2>
        <p className="section__lead">
          Live records from the HoloNet (the Star Wars API), sorted by the Confederacy into aerial, ground, space and
          naval forces. Units marked <span className="tag tag--archive">Archive</span> come from our own records.
        </p>
      </header>

      {loading && <StatusLoader label="Receiving fleet registry from the HoloNet…" />}

      {!loading && error && (
        <ErrorPanel title="The fleet registry could not be received" message={error} onRetry={retry} />
      )}

      {!loading && !error && (
        <>
          <div className="toolbar">
            <FilterBar active={domain} onChange={setDomain} counts={counts} />
          </div>

          <p className="results-count" aria-live="polite">
            Showing {visible.length} of {units.length} units
          </p>

          {visible.length > 0 ? (
            <div className="grid">
              {visible.map((u) => (
                <UnitCard key={u.name} unit={u} onSelect={(unit) => console.log('Selected', unit)} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <p>No units in this domain yet.</p>
              <button type="button" className="btn" onClick={() => setDomain('all')}>
                Clear filters
              </button>
            </div>
          )}
        </>
      )}

    </section>
  );
}

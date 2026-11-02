import { useFetch } from '../hooks/useFetch.js';
import StatusLoader from './StatusLoader.jsx';
import ErrorPanel from './ErrorPanel.jsx';

// One leader. Each card runs its own fetch (SWAPI people search),
// so each card has its own loading / error / data state.
export default function CommanderCard({ commander, apiBase }) {
  const { data, loading, error, retry } = useFetch(
    `${apiBase}/people/?search=${encodeURIComponent(commander.search)}`
  );

  if (loading) return <StatusLoader label={`Locating ${commander.honorific}…`} count={1} variant="commander" />;
  if (error) return <ErrorPanel title={`Could not reach ${commander.honorific}`} message={error} onRetry={retry} />;

  const person = data?.results?.[0];
  if (!person) {
    return (
      <ErrorPanel
        title="Record not found"
        message={`The HoloNet returned no record for “${commander.search}”.`}
        onRetry={retry}
      />
    );
  }

  const stats = [
    ['Height', person.height !== 'unknown' ? `${person.height} cm` : 'Classified'],
    ['Mass', person.mass !== 'unknown' ? `${person.mass} kg` : 'Classified'],
    ['Born', person.birth_year !== 'unknown' ? person.birth_year : 'Classified'],
    ['Eyes', person.eye_color],
  ];

  return (
    <article className="commander">
      <p className="commander__title">{commander.title}</p>
      <h3 className="commander__name">{commander.honorific}</h3>
      <p className="commander__record">HoloNet record: {person.name}</p>

      <dl className="commander__stats">
        {stats.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="commander__tribute">
        {commander.tribute.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
    </article>
  );
}

import { API_BASE } from './config.js';
import { useFetch } from './hooks/useFetch.js';
import StatusLoader from './components/StatusLoader.jsx';
import ErrorPanel from './components/ErrorPanel.jsx';

export default function App() {
  const { data, loading, error, retry } = useFetch(`${API_BASE}/vehicles/`, { allPages: true });

  return (
    <main style={{ padding: '48px 24px' }}>
      <h1>Roger Roger</h1>

      {/* The Three States Pattern: exactly one of these shows at a time. */}
      {loading && <StatusLoader label="Receiving fleet registry from the HoloNet…" />}
      {!loading && error && <ErrorPanel message={error} onRetry={retry} />}
      {!loading && !error && data && (
        <ul>
          {data.map((v) => (
            <li key={v.name}>{v.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

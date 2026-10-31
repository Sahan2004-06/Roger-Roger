import { useEffect } from 'react';
import { API_BASE } from './config.js';
import { useFetch } from './hooks/useFetch.js';

export default function App() {
  // First real request: every vehicle in SWAPI, across all pages.
  const { data, loading, error } = useFetch(`${API_BASE}/vehicles/`, { allPages: true });

  // Log the raw response so we know exactly what shape the data has
  // before writing any rendering code.
  useEffect(() => {
    if (data) console.log('SWAPI vehicles:', data);
  }, [data]);

  return (
    <main style={{ padding: '48px 24px' }}>
      <h1>Roger Roger</h1>
      <p>
        {loading && 'Loading…'}
        {error && `Error: ${error}`}
        {data && `Received ${data.length} vehicles from SWAPI. Open the console to inspect them.`}
      </p>
    </main>
  );
}

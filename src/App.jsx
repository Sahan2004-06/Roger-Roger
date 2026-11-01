import { API_BASE } from './config.js';
import Arsenal from './sections/Arsenal.jsx';

export default function App() {
  return (
    <main>
      <h1 style={{ padding: '48px 24px 0' }}>Roger Roger</h1>
      <Arsenal apiBase={API_BASE} />
    </main>
  );
}

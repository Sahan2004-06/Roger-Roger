import { API_BASE } from './config.js';
import Hero from './components/Hero.jsx';
import Arsenal from './sections/Arsenal.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Arsenal apiBase={API_BASE} />
      </main>
    </>
  );
}

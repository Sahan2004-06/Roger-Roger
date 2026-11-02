import { API_BASE } from './config.js';
import Hero from './components/Hero.jsx';
import Commanders from './sections/Commanders.jsx';
import Arsenal from './sections/Arsenal.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Commanders apiBase={API_BASE} />
        <Arsenal apiBase={API_BASE} />
      </main>
    </>
  );
}

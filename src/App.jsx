import { useState } from 'react';
import { API_BASE, BROKEN_API_BASE } from './config.js';
import Hero from './components/Hero.jsx';
import Commanders from './sections/Commanders.jsx';
import Arsenal from './sections/Arsenal.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  // Visiting the site with ?sabotage in the URL starts with the error state on.
  const [sabotaged, setSabotaged] = useState(
    () => new URLSearchParams(window.location.search).has('sabotage')
  );

  // Every section fetches from apiBase. Flipping the switch changes this string,
  // which changes each useFetch URL, which re-runs each fetch.
  const apiBase = sabotaged ? BROKEN_API_BASE : API_BASE;

  return (
    <>
      <Hero />
      <main>
        <Commanders apiBase={apiBase} />
        <Arsenal apiBase={apiBase} />
      </main>
      <Footer sabotaged={sabotaged} onToggleSabotage={() => setSabotaged((s) => !s)} />
    </>
  );
}

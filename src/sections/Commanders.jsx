import { COMMANDERS } from '../data/commanders.js';
import CommanderCard from '../components/CommanderCard.jsx';

export default function Commanders({ apiBase }) {
  return (
    <section className="section section--commanders" id="leaders" aria-labelledby="leaders-title">
      <header className="section__head">
        <p className="eyebrow">Our Leaders</p>
        <h2 id="leaders-title" className="section__title">The minds and the might of the Confederacy</h2>
      </header>
      <div className="commanders__grid">
        {COMMANDERS.map((c) => (
          <CommanderCard key={c.search} commander={c} apiBase={apiBase} />
        ))}
      </div>
    </section>
  );
}

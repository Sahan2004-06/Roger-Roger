// Top banner: the site's name, a propaganda headline and a scrolling news ticker.
const TICKER = [
  'Another system joins the Confederacy',
  'Droid foundries report record output',
  'Senate corruption scandal deepens on Coruscant',
  'General Grievous adds to his collection',
  'Count Dooku addresses the Separatist Parliament',
  'Freedom has never been more affordable',
];

export default function Hero() {
  return (
    <header className="hero">
      <nav className="nav" aria-label="Main">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true" />
          Roger Roger
        </a>
        <div className="nav__links">
          <a href="#leaders">Leaders</a>
          <a href="#arsenal">Arsenal</a>
        </div>
      </nav>

      <div className="hero__body" id="top">
        <p className="eyebrow">Official HoloNet presence of the Confederacy of Independent Systems</p>
        <h1 className="hero__title">
          Roger<span>,</span> Roger<span>.</span>
        </h1>
        <p className="hero__lead">
          Ten thousand systems chose freedom over a corrupt Senate. Millions of loyal droids stand ready to defend
          that choice. Meet the leaders who guide us and the machines that never tire.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#arsenal">Inspect the arsenal</a>
          <a className="btn" href="#leaders">Meet our leaders</a>
        </div>
      </div>

      <div className="ticker" aria-label="Confederacy news">
        <div className="ticker__track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="ticker__item" aria-hidden={i >= TICKER.length}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

// Footer with the "Sabotage the relay" switch: a deliberate way to trigger
// the error state, because the brief says the professor will test it.
export default function Footer({ sabotaged, onToggleSabotage }) {
  return (
    <footer className="footer">
      <div className="sabotage">
        <div>
          <p className="sabotage__title">Republic sabotage drill</p>
          <p className="sabotage__text">
            Switch this on to point every request at a broken address and see how the site handles a lost signal.
            Switch it off and the signal comes back on its own.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={sabotaged}
          className="switch"
          onClick={onToggleSabotage}
        >
          <span className="switch__track" aria-hidden="true"><span className="switch__thumb" /></span>
          <span>{sabotaged ? 'Relay sabotaged' : 'Sabotage the relay'}</span>
        </button>
      </div>

      <p className="footer__small">
        Roger Roger is a fan project for CSC 436. Vehicle, starship and people data from{' '}
        <a href="https://swapi.dev" target="_blank" rel="noreferrer">SWAPI</a>. Star Wars belongs to Lucasfilm.
        No Republic credits were harmed.
      </p>
    </footer>
  );
}

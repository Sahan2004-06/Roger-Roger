// Search input with a real <label> (visually hidden but read by screen readers).
// Filtering happens on data we already fetched, so typing never sends requests.
export default function SearchBox({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="unit-search" className="visually-hidden">
        Search the arsenal
      </label>
      <input
        id="unit-search"
        type="search"
        placeholder="Search by name, class or manufacturer…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

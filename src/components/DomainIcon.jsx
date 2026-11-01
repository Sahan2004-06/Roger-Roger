// Small original line icons, one per battle domain.
// aria-hidden because the domain is also written out as text next to it.
const PATHS = {
  aerial: 'M4 18 L16 6 L28 18 M10 18 L16 12 L22 18',
  ground: 'M5 20 H27 M7 20 a3 3 0 1 0 0.01 0 M16 20 a3 3 0 1 0 0.01 0 M25 20 a3 3 0 1 0 0.01 0 M8 14 H24 L21 9 H11 Z',
  space: 'M16 4 L19 13 L28 16 L19 19 L16 28 L13 19 L4 16 L13 13 Z',
  naval: 'M3 14 q3.25 -4 6.5 0 t6.5 0 t6.5 0 t6.5 0 M3 21 q3.25 -4 6.5 0 t6.5 0 t6.5 0 t6.5 0',
};

export default function DomainIcon({ domain, size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[domain] ?? PATHS.space} />
    </svg>
  );
}

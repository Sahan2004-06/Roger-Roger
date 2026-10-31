import { useEffect, useState, useCallback } from 'react';

// Turn low-level errors into sentences a person can understand.
function toFriendlyMessage(err) {
  if (err instanceof TypeError) {
    // fetch() throws a TypeError when the network itself fails (offline, DNS, CORS).
    return 'The HoloNet relay could not be reached. Check your connection and try again.';
  }
  return err.message || 'An unknown malfunction occurred.';
}

// Fetch one URL and return the parsed JSON, or throw a readable error.
async function fetchJson(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error(`The relay answered with status ${res.status}. The transmission was rejected.`);
  }
  return res.json();
}

// SWAPI splits big lists into pages of 10: { results: [...], next: "url of next page" }.
// This keeps following "next" until there are no pages left, then returns one array.
async function fetchAllPages(url, signal) {
  const all = [];
  let next = url;
  while (next) {
    const page = await fetchJson(next, signal);
    if (Array.isArray(page)) return page; // some SWAPI mirrors return a plain array
    all.push(...page.results);
    next = page.next ? page.next.replace('http://', 'https://') : null;
  }
  return all;
}

/**
 * useFetch(url, { allPages })
 * A reusable custom hook. Give it a URL, get back the Three States:
 *   loading: true while waiting
 *   error:   a readable message if it failed (otherwise null)
 *   data:    the result once it arrives
 * plus retry(), which runs the request again.
 */
export function useFetch(url, { allPages = false } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);
  // Bumping this number re-runs the effect, which is how retry works.
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!url) return;

    // AbortController lets us cancel the request if the component unmounts
    // or the URL changes before the answer comes back.
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = allPages
          ? await fetchAllPages(url, controller.signal)
          : await fetchJson(url, controller.signal);
        setData(result);
        setLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') return; // we cancelled it on purpose
        setData(null);
        setError(toFriendlyMessage(err));
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
    // Only primitives here (a string, a boolean, a number), so the effect
    // runs once per URL/retry and never loops forever.
  }, [url, allPages, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return { data, loading, error, retry };
}

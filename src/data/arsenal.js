// SWAPI gives us the stats (class, maker, length, speed, crew, cost), but it
// has no idea which side a machine fought for or whether it flies, rolls or swims.
// This file adds that: which SWAPI entries are Separatist, their battle domain,
// and the Confederacy's own (very flattering) description of each one.
//
// Keys must match the SWAPI "name" field. Matching is case-insensitive.

export const DOMAINS = [
  { id: 'all', label: 'All forces' },
  { id: 'aerial', label: 'Aerial' },
  { id: 'ground', label: 'Ground' },
  { id: 'space', label: 'Space' },
  { id: 'naval', label: 'Naval' },
];

export const ARSENAL = {
  // ---------- SPACE ----------
  'vulture droid': {
    domain: 'space',
    kind: 'Droid',
    blurb:
      'Why send a pilot to die when the starfighter can think for itself? The Variable Geometry Self-Propelled Battle Droid flies without fear, fatigue or pay, folding into a walker the moment it lands. Republic clone pilots tire. Vultures never do.',
  },
  'droid tri-fighter': {
    domain: 'space',
    kind: 'Droid',
    blurb:
      'Three arms, one purpose. The tri-fighter carries a brain sharper than any Republic academy graduate and the reflexes to prove it. Its silhouette alone has turned more than one clone squadron back toward home.',
  },
  'geonosian starfighter': {
    domain: 'space',
    kind: 'Starfighter',
    blurb:
      'Built in the hives of Geonosis by an industrious people who chose freedom over Senate taxation. Nimble, sturdy and flown by warriors born for the sky.',
  },
  'belbullab-22 starfighter': {
    domain: 'space',
    kind: 'Starfighter',
    blurb:
      'The personal starfighter of General Grievous himself. When the Supreme Commander needs to be somewhere, he is already there, and his enemies are already leaving.',
  },
  'solar sailer': {
    domain: 'space',
    kind: 'Warship',
    blurb:
      'The private vessel of His Excellency Count Dooku: a Geonosian-crafted yacht with a sail that drinks starlight. Elegance, as always, is the Count’s signature.',
  },
  'droid control ship': {
    domain: 'space',
    kind: 'Warship',
    blurb:
      'A floating citadel that thinks for an entire army. One ship, one signal, and a hundred thousand soldiers march in perfect step. The Republic calls this a weakness. We call it discipline.',
  },
  'trade federation cruiser': {
    domain: 'space',
    kind: 'Warship',
    blurb:
      'Once a merchant hauler, now a fortress. The Federation’s cruisers prove what private enterprise can build when it stops waiting for Coruscant’s permission.',
  },
  'banking clan frigte': {
    domain: 'space',
    kind: 'Warship',
    blurb:
      'Funded, armed and crewed by the InterGalactic Banking Clan, a true believer in independent systems. Every credit the Republic owes is a reminder of who really keeps the galaxy running.',
  },

  // ---------- AERIAL ----------
  'droid gunship': {
    domain: 'aerial',
    kind: 'Droid',
    blurb:
      'The Heavy Missile Platform needs no runway, no crew and no rest. It hovers over the battlefield like a verdict and delivers that verdict by the dozen.',
  },
  'single trooper aerial platform': {
    domain: 'aerial',
    kind: 'Vehicle',
    blurb:
      'Light, quick and pitiless. The STAP lets a single battle droid patrol a forest, a city or a swamp at speeds no Republic foot soldier can hope to match.',
  },
  'c-9979 landing craft': {
    domain: 'aerial',
    kind: 'Vehicle',
    blurb:
      'Wings wide enough to shade a city block, holds deep enough to carry an army. When the C-9979 lands, the occupation is already over.',
  },
  'neimoidian shuttle': {
    domain: 'aerial',
    kind: 'Vehicle',
    blurb:
      'Diplomacy needs transport too. The Neimoidian shuttle carries the Confederacy’s ministers safely between worlds that have chosen self-rule.',
  },

  // ---------- GROUND ----------
  'armored assault tank': {
    domain: 'ground',
    kind: 'Vehicle',
    blurb:
      'Repulsor-lifted, heavily plated and armed for any argument. The AAT turns open fields into Confederacy territory one shell at a time.',
  },
  'multi-troop transport': {
    domain: 'ground',
    kind: 'Vehicle',
    blurb:
      'One hundred and twelve battle droids, folded neatly inside and deployed in seconds. The MTT is a parade, a fortress and an invasion in one hull.',
  },
  'corporate alliance tank droid': {
    domain: 'ground',
    kind: 'Droid',
    blurb:
      'A single great wheel, a mind of its own and the full backing of the Corporate Alliance. It rolls through barricades the Republic spent weeks building.',
  },
  'tsmeu-6 personal wheel bike': {
    domain: 'ground',
    kind: 'Vehicle',
    blurb:
      'General Grievous does not wait for transport. His wheel bike climbs cliffs on mechanical legs and outruns Jedi on open ground.',
  },
};

// Lowercase + trim so "Vulture Droid" and "vulture droid" match the same key.
export function arsenalEntry(name) {
  return ARSENAL[name.trim().toLowerCase()] ?? null;
}

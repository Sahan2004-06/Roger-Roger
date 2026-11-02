// The two leaders the site celebrates. "search" is sent to SWAPI's people
// search (/people/?search=...) to fetch their real records; the titles and
// tributes below are the Confederacy's own words.

export const COMMANDERS = [
  {
    search: 'dooku',
    title: 'Head of State of the Confederacy',
    honorific: 'His Excellency Count Dooku of Serenno',
    tribute: [
      'A nobleman by birth and a statesman by conviction, Count Dooku saw what the Senate refused to see: a Republic choking on its own corruption, bought and sold by the very politicians sworn to serve it.',
      'Where others complained, he acted. He gave thousands of systems the courage to leave, and the Confederacy of Independent Systems was born from his vision. Calm under fire, eloquent in every chamber and unmatched with a blade, he has never needed to raise his voice to be heard across the galaxy.',
      'History will remember him not as a separatist, but as a liberator.',
    ],
  },
  {
    search: 'grievous',
    title: 'Supreme Commander of the Droid Armies',
    honorific: 'General Grievous',
    tribute: [
      'Born a warrior of Kalee, rebuilt in durasteel, General Grievous is proof that the Confederacy turns hardship into strength. What remains of the man is pure will; what surrounds it is the finest engineering the Separatist foundries have ever produced.',
      'He has studied the Jedi more closely than they have studied themselves, and his collection of their lightsabers speaks for his record. He commands fleets of millions with a single word and leads from the front, where the fighting is hottest.',
      'The Republic fears his name. Our soldiers follow it.',
    ],
  },
];

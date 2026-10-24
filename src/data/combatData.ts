import { StatMetric, MartialArtMove, CharyeokPower } from '../types';

export const COMBAT_STATS: StatMetric[] = [
  {
    name: 'Physical Strength',
    moriValue: 80,
    moriDisplay: '8 / 10 (Concrete-Crushing)',
    wukongValue: 100,
    wukongDisplay: '∞ Infinite (Planetary Cleaving)',
    description: 'From cracking stadium floors with bare kicks to hurling divine staves weighing hundreds of millions of tons.',
  },
  {
    name: 'Agility & Speed',
    moriValue: 90,
    moriDisplay: '9 / 10 (Supersonic Afterimages)',
    wukongValue: 100,
    wukongDisplay: '999+ (Faster Than Light / FTL+)',
    description: 'Utilizes Bo-Bup instantaneous stepping to cross solar system distances in mere fractions of a second.',
  },
  {
    name: 'Battle IQ & Mimicry',
    moriValue: 70,
    moriDisplay: '7 / 10 (Prodigious Reflexes)',
    wukongValue: 95,
    wukongDisplay: '600 (Absolute Combat Instinct)',
    description: 'Can copy any martial arts style, stance, or technique after witnessing it just once.',
  },
  {
    name: 'Endurance & Durability',
    moriValue: 80,
    moriDisplay: '8 / 10 (Stamina of Steel)',
    wukongValue: 100,
    wukongDisplay: '∞ Immortal (Divine Stone Body)',
    description: 'Survived the blast of planets exploding and prolonged battles lasting decades without physical fatigue.',
  },
  {
    name: 'Cosmic Luck / Fortune',
    moriValue: 40,
    moriDisplay: '4 / 10 (Constantly In Peril)',
    wukongValue: 85,
    wukongDisplay: '500 (Fate-Defying Fortune)',
    description: 'Bends the concept of karma and probability itself through sheer indomitable willpower.',
  },
];

export const MARTIAL_ARTS_MOVES: MartialArtMove[] = [
  {
    name: '3-Stage Hoechook (3段 回蹴)',
    style: 'Renewal Taekwondo',
    execution: 'A lightning-fast triple kick attacking both sides of the head and the neck simultaneously.',
    effect: 'Concusses the brain and causes instantaneous blackout even against superhuman durable opponents.',
    iconName: 'Zap',
  },
  {
    name: 'Blue Dragon’s Kick (青龍之蹴)',
    style: 'Renewal Taekwondo',
    execution: 'A sweeping roundhouse kick that manipulates air pressure, gathering atmospheric currents into a roaring vortex.',
    effect: 'Summons a gigantic draconic windstorm capable of splitting storms and shredding armored defenses.',
    iconName: 'Wind',
  },
  {
    name: 'Recoilless Kick (無反動 蹴)',
    style: 'Recoilless',
    execution: 'A supreme strike born from eliminating all wasted motion, deceleration, and kinetic recoil.',
    effect: 'Sends kinetic force straight through dimensional layers and forces of nature, bending space itself.',
    iconName: 'Flame',
  },
  {
    name: 'Nabong Needle Ryu: Limiter Removal (限界 突破)',
    style: 'Nabong Needle Ryu',
    execution: 'Striking precise pressure points behind the neck and heart to disable the brain’s pain and safety limiters.',
    effect: 'Multiplies physical speed and strength by 2x, 8x, up to 250,000x at the extreme cost of rebound strain.',
    iconName: 'Activity',
  },
  {
    name: 'Bo-Bup (步法 - Instant Step)',
    style: 'Renewal Taekwondo',
    execution: 'Instantly vanishing from sight by explosive bursts from foot pressure against the ground.',
    effect: 'Appears directly in the blind spot of the enemy leaving lingering afterimages.',
    iconName: 'Footprints',
  },
];

export const CHARYEOK_SYSTEM: CharyeokPower[] = [
  {
    name: 'Haetae (獬豸)',
    godOrEntity: 'Aquatic Guardian Beast of Divine Justice',
    user: 'Han Daewi',
    ability: 'Spits dense water shield bubbles, shoots piercing water needles, and washes away curses.',
    tabooStatus: 'Unsealed & Divine Harmony',
  },
  {
    name: 'Lu Bu Fengxian (呂布 奉先)',
    godOrEntity: 'Legendary Peerless Warlord of the Three Kingdoms',
    user: 'Yoo Mira',
    ability: 'Summons the Red Hare steed and Sky Piercing Halberd, drastically multiplying physical attack power.',
    tabooStatus: 'Evolved to Jade Emperor Body',
  },
  {
    name: 'Longinus (朗基努斯)',
    godOrEntity: 'Holy Centurion of the Spear of Destiny',
    user: 'Park Mujin',
    ability: 'Manipulates localized gravity with giant crucifix hand prints that crush everything into the crust.',
    tabooStatus: 'Fused into Maitreya',
  },
  {
    name: 'Tam (貪 - Greed / Chimera)',
    godOrEntity: 'Ancient Primordial Consuming Demon',
    user: 'Taek Jegal / Nox Test Subjects',
    ability: 'Absorbs the flesh, souls, and borrowed powers of other fighters to assimilate their genetic abilities.',
    tabooStatus: 'Forbidden & Chaotic',
  },
];

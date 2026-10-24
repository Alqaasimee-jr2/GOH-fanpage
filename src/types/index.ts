export type CharacterMode = 'mori' | 'wukong';

export interface StatMetric {
  name: string;
  moriValue: number;
  moriDisplay: string;
  wukongValue: number;
  wukongDisplay: string;
  description: string;
}

export interface TrioMember {
  id: string;
  name: string;
  epithet: string;
  martialArt: string;
  borrowedPower: string;
  signatureTechnique: string;
  description: string;
  image: string;
  quote: string;
  stats: {
    strength: string;
    speed: string;
    technique: string;
  };
}

export interface LegendProfile {
  name: string;
  title: string;
  affiliation: string;
  description: string;
  quote?: string;
  badge: string;
}

export interface MartialArtMove {
  name: string;
  style: 'Renewal Taekwondo' | 'Recoilless' | 'Nabong Needle Ryu' | 'Moonlight Sword' | 'Kyokushin Karate';
  execution: string;
  effect: string;
  iconName: string;
}

export interface CharyeokPower {
  name: string;
  godOrEntity: string;
  user: string;
  ability: string;
  tabooStatus: string;
}

export interface DivineRelic {
  id: string;
  name: string;
  alias: string;
  origin: string;
  description: string;
  powers: string[];
  image?: string;
  weight: string;
}

export interface StoryArc {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  period: string;
  summary: string;
  climax: string;
  keyEvents: string[];
  quote: string;
}

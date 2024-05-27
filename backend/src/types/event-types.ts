import { ValuesType } from 'utility-types';

const EventTypes = {
  FOOTBALL: 'football',
  BASKETBALL: 'basketball',
  PADEL: 'padel',
  BOARDGAMES: 'boardgames',
  VIDEOGAMES: 'videogames',
  COFFEE: 'coffee',
} as const;

export type EventType = ValuesType<typeof EventTypes>;

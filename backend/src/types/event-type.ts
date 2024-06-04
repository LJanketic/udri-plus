import { ValuesType } from 'utility-types';

export enum EventType {
  FOOTBALL = 'FOOTBALL',
  BASKETBALL = 'BASKETBALL',
  PADEL = 'PADEL',
  GAME_NIGHT = 'GAME_NIGHT',
  VIDEO_GAMES = 'VIDEO_GAMES',
  COFFEE = 'COFFEE',
  NIGHT_OUT = 'NIGHT_OUT',
  FIELD_TRIP = 'FIELD_TRIP',
}

export type EventTypeValues = ValuesType<typeof EventType>;

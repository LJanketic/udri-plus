import { ValuesType } from 'utility-types';

export enum VoteType {
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  MAYBE = 'MAYBE',
}

export type VoteTypeValues = ValuesType<typeof VoteType>;

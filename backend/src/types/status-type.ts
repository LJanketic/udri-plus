import { ValuesType } from 'utility-types';

export enum StatusType {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  SENT = 'SENT',
}

export type StatusTypeValues = ValuesType<typeof StatusType>;

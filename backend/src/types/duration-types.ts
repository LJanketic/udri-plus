import { ValuesType } from 'utility-types';

const DurationTypes = {
  FIFTEEN_MINUTES: '15min',
  THIRTY_MINUTES: '30min',
  FOURTY_FIVE_MINUTES: '45min',
  ONE_HOUR: '1hour',
  ONE_AND_HALF_HOURS: '1.5hours',
  TWO_HOURS: '2hours',
  MORE_THAN_TWO_HOURS: '2+hours',
} as const;

export type DurationType = ValuesType<typeof DurationTypes>;

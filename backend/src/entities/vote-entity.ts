import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, User, Event } from './index';
import { VoteTypeValues } from '../types';

@Entity()
export class Vote extends BaseEntity {
  @ManyToOne(() => Event)
  event: Event;

  @ManyToOne(() => User)
  user: User;

  @Enum()
  type: VoteTypeValues;

  constructor(event: Event, user: User, type: VoteTypeValues) {
    super();
    this.event = event;
    this.user = user;
    this.type = type;
  }
}

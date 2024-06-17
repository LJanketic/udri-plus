import { Entity, Property, Enum, ManyToOne, OneToMany } from '@mikro-orm/core';
import { BaseEntity, User, Vote, EventDetails } from './index';
import { EventTypeValues } from '../types';

@Entity()
export class Event extends BaseEntity {
  @ManyToOne(() => User)
  creator: User;

  @Property()
  title: string;

  @Enum()
  type: EventTypeValues;

  @OneToMany(() => Vote, (vote) => vote.event)
  votes = new Array<Vote>();

  @OneToMany(() => EventDetails, (detail) => detail.event)
  details = new Array<EventDetails>();

  constructor(creator: User, title: string, type: EventTypeValues) {
    super();
    this.creator = creator;
    this.title = title;
    this.type = type;
  }
}

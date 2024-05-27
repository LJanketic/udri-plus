import { Entity, Enum, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { BaseEntity } from './base-entity';
import { EventType, DurationType } from '../types';

@Entity()
export class EventEntity extends BaseEntity {
  @Property()
  eventName: string;

  @Enum()
  eventType: EventType;

  @Property()
  description: string;

  @Property()
  duration: DurationType;

  @Property()
  startDate: Date;

  @Property()
  location: string;

  @Property({ type: 'ObjectId' })
  plus: ObjectId[] = [];

  @Property({ type: 'ObjectId' })
  minus: ObjectId[] = [];

  @Property({ type: 'ObjectId' })
  maybe: ObjectId[] = [];

  constructor(
    eventName: string,
    eventType: EventType,
    description: string,
    duration: DurationType,
    startDate: Date,
    location: string,
    plus: ObjectId[] = [],
    minus: ObjectId[] = [],
    maybe: ObjectId[] = []
  ) {
    super();
    this.eventName = eventName;
    this.eventType = eventType;
    this.description = description;
    this.duration = duration;
    this.startDate = startDate;
    this.location = location;
    this.plus = plus;
    this.minus = minus;
    this.maybe = maybe;
  }
}

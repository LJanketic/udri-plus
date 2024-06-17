import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, Event } from './index';

@Entity()
export class EventDetails extends BaseEntity {
  @ManyToOne(() => Event)
  event: Event;

  @Property()
  start_time: Date;

  @Property()
  duration: string;

  @Property()
  location: string;

  // TODO this type is left for debate
  @Property()
  details: Record<string, any>;

  constructor(
    event: Event,
    start_time: Date,
    duration: string,
    location: string,
    details: Record<string, any>
  ) {
    super();
    this.event = event;
    this.start_time = start_time;
    this.duration = duration;
    this.location = location;
    this.details = details;
  }
}

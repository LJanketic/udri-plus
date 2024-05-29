import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, EventEntity } from './index';

@Entity()
export class EventDetailEntity extends BaseEntity {
  @ManyToOne(() => EventEntity)
  event: EventEntity;

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
    event: EventEntity,
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

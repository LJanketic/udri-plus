import { Entity, Property, Enum, ManyToOne, OneToMany } from '@mikro-orm/core';
import { BaseEntity, UserEntity, VoteEntity, EventDetailEntity } from './index';
import { EventTypeValues } from '../types';

@Entity()
export class EventEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  creator: UserEntity;

  @Property()
  title: string;

  @Enum()
  type: EventTypeValues;

  @OneToMany(() => VoteEntity, (vote) => vote.event)
  votes = new Array<VoteEntity>();

  @OneToMany(() => EventDetailEntity, (detail) => detail.event)
  details = new Array<EventDetailEntity>();

  constructor(creator: UserEntity, title: string, type: EventTypeValues) {
    super();
    this.creator = creator;
    this.title = title;
    this.type = type;
  }
}

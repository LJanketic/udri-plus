import { Entity, Property, ManyToOne, OneToMany } from '@mikro-orm/core';
import { BaseEntity, UserEntity, VoteEntity, EventDetailEntity } from './index';

@Entity()
export class EventEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  creator: UserEntity;

  @Property()
  title: string;

  // TODO: Type should be of type enum with a predefined type
  @Property()
  type: string;

  @OneToMany(() => VoteEntity, (vote) => vote.event)
  votes = new Array<VoteEntity>();

  @OneToMany(() => EventDetailEntity, (detail) => detail.event)
  details = new Array<EventDetailEntity>();

  constructor(creator: UserEntity, title: string, type: string) {
    super();
    this.creator = creator;
    this.title = title;
    this.type = type;
  }
}

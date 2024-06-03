import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, UserEntity, EventEntity } from './index';

@Entity()
export class VoteEntity extends BaseEntity {
  @ManyToOne(() => EventEntity)
  event: EventEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  //TODO: vote_type should be of type enum
  @Property()
  vote_type: string;

  constructor(event: EventEntity, user: UserEntity, vote_type: string) {
    super();
    this.event = event;
    this.user = user;
    this.vote_type = vote_type;
  }
}

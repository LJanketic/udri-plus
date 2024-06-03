import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, UserEntity, EventEntity } from './index';
import { VoteTypeValues } from '../types';

@Entity()
export class VoteEntity extends BaseEntity {
  @ManyToOne(() => EventEntity)
  event: EventEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Enum()
  vote_type: VoteTypeValues;

  constructor(event: EventEntity, user: UserEntity, vote_type: VoteTypeValues) {
    super();
    this.event = event;
    this.user = user;
    this.vote_type = vote_type;
  }
}

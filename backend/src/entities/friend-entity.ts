import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, UserEntity } from './index';
import { StatusTypeValues } from '../types';

@Entity()
export class FriendEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => UserEntity)
  friend: UserEntity;

  @Enum()
  status: StatusTypeValues;

  constructor(user: UserEntity, friend: UserEntity, status: StatusTypeValues) {
    super();
    this.user = user;
    this.friend = friend;
    this.status = status;
  }
}

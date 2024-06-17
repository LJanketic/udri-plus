import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, User } from './index';
import { StatusTypeValues } from '../types';

@Entity()
export class Friend extends BaseEntity {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => User)
  friend: User;

  @Enum()
  status: StatusTypeValues;

  constructor(user: User, friend: User, status: StatusTypeValues) {
    super();
    this.user = user;
    this.friend = friend;
    this.status = status;
  }
}

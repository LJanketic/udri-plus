import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, UserEntity } from './index';

@Entity()
export class FriendEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => UserEntity)
  friend: UserEntity;

  // TODO: status should be enum with its own type
  @Property()
  status: string;

  constructor(user: UserEntity, friend: UserEntity, status: string) {
    super();
    this.user = user;
    this.friend = friend;
    this.status = status;
  }
}

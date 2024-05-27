import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity, UserEntity } from './index';

@Entity()
export class FriendEntity extends BaseEntity {
  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @ManyToOne(() => UserEntity)
  friend!: UserEntity;

  @Property()
  status!: string;
}

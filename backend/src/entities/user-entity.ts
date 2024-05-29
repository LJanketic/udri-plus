import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Property()
  email: string;

  @Property()
  username: string;

  @Property()
  password: string;

  constructor(email: string, username: string, password: string) {
    super();
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

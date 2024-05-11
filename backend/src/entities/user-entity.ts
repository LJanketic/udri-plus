import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Property()
  username: string;

  @Property()
  password: String = new String();

  @Property({ type: 'boolean', default: false })
  activated: boolean = false;

  constructor(username: string, password: string, activated: boolean) {
    super();
    this.username = username;
    this.password = password;
    this.activated = activated;
  }
}

import { Migration } from '@mikro-orm/migrations';

export class Migration20240616075918 extends Migration {
  async up(): Promise<void> {
    const knex = this.getKnex();

    const createUserTable = knex.schema.createTable('user', (table) => {
      table.uuid('id').primary();
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
      table.string('email', 255).notNullable();
      table.string('username', 255).notNullable();
      table.string('password', 255).notNullable();
    });

    const createFriendTable = knex.schema.createTable('friend', (table) => {
      table.uuid('id').primary();
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
      table.uuid('user_id').notNullable();
      table.uuid('friend_id').notNullable();
      table.enum('status', ['ACCEPTED', 'REJECTED', 'SENT']).notNullable();
      table.foreign('user_id').references('user.id').onUpdate('CASCADE');
      table.foreign('friend_id').references('user.id').onUpdate('CASCADE');
    });

    const createEventTable = knex.schema.createTable('event', (table) => {
      table.uuid('id').primary();
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
      table.uuid('creator_id').notNullable();
      table.string('title', 255).notNullable();
      table
        .enum('type', [
          'FOOTBALL',
          'BASKETBALL',
          'PADEL',
          'GAME_NIGHT',
          'VIDEO_GAMES',
          'COFFEE',
          'NIGHT_OUT',
          'FIELD_TRIP',
        ])
        .notNullable();
      table.foreign('creator_id').references('user.id').onUpdate('CASCADE');
    });

    const createEventDetailsTable = knex.schema.createTable(
      'event_details',
      (table) => {
        table.uuid('id').primary();
        table.timestamp('created_at', { useTz: true }).notNullable();
        table.timestamp('updated_at', { useTz: true }).notNullable();
        table.uuid('event_id').notNullable();
        table.timestamp('start_time', { useTz: true }).notNullable();
        table.string('duration', 255).notNullable();
        table.string('location', 255).notNullable();
        table.string('details', 255).notNullable();
        table.foreign('event_id').references('event.id').onUpdate('CASCADE');
      }
    );

    const createVoteTable = knex.schema.createTable('vote', (table) => {
      table.uuid('id').primary();
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
      table.uuid('event_id').notNullable();
      table.uuid('user_id').notNullable();
      table.enum('type', ['PLUS', 'MINUS', 'MAYBE']).notNullable();
      table.foreign('event_id').references('event.id').onUpdate('CASCADE');
      table.foreign('user_id').references('user.id').onUpdate('CASCADE');
    });

    await Promise.all([
      this.addSql(createUserTable.toQuery()),
      this.addSql(createFriendTable.toQuery()),
      this.addSql(createEventTable.toQuery()),
      this.addSql(createEventDetailsTable.toQuery()),
      this.addSql(createVoteTable.toQuery()),
    ]);
  }

  async down(): Promise<void> {
    const knex = this.getKnex();

    const dropVoteTable = knex.schema.dropTableIfExists('vote');
    const dropEventDetailsTable =
      knex.schema.dropTableIfExists('event_details');
    const dropEventTable = knex.schema.dropTableIfExists('event');
    const dropFriendTable = knex.schema.dropTableIfExists('friend');
    const dropUserTable = knex.schema.dropTableIfExists('user');

    await Promise.all([
      this.addSql(dropVoteTable.toQuery()),
      this.addSql(dropEventDetailsTable.toQuery()),
      this.addSql(dropEventTable.toQuery()),
      this.addSql(dropFriendTable.toQuery()),
      this.addSql(dropUserTable.toQuery()),
    ]);
  }
}

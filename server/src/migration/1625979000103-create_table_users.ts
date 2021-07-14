import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableUsers1625979000103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE extension IF NOT EXISTS "uuid-ossp"`)

        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    default: 'uuid_generate_v4()'
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "200",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "200",
                },
                {
                    name: "wrong_count",
                    type: "int",
                    default: 0
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "150",
                    isNullable: true
                },
                {
                    name: "line_token",
                    type: "varchar",
                    length: "150",
                    isNullable: true
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "200"
                },
                {
                    name: "first_name",
                    type: "varchar",
                    isNullable: true,
                    length: "150"
                },
                {
                    name: "last_name",
                    type: "varchar",
                    isNullable: true,
                    length: "150"
                },
                {
                    name: "created_at",
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: "created_by",
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: "updated_at",
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: "updated_by",
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: "deleted_at",
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: "deleted_by",
                    type: 'uuid',
                    isNullable: true
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}

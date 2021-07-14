import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert, BeforeUpdate, BeforeRemove, BaseEntity
} from "typeorm";
import bcrypt from "bcrypt";

@Entity('users')
export default class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 200,
        unique: true
    })
    username: string;

    @Column({ type: 'varchar', length: 200 })
    password: string;

    @Column({ default: 0 })
    wrong_count: number;

    @Column({ type: 'varchar', length: 150, nullable: true })
    email: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    line_token: string;

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    first_name: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    last_name: string;

    @Column({ type: 'timestamptz', default: new Date() })
    created_at: Date;

    @Column({ nullable: true })
    created_by: string;

    @Column({ type: 'timestamptz', nullable: true })
    updated_at: Date;

    @Column({ nullable: true })
    updated_by: string;

    @Column({ type: 'timestamptz', nullable: true })
    deleted_at: Date;

    @Column({ nullable: true })
    deleted_by: string;

    @BeforeInsert()
    @BeforeUpdate()
    async generatePasswordHash(): Promise<void> {
        this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    }

    @BeforeInsert()
    createDates() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    @BeforeUpdate()
    updateDates() {
        this.updated_at = new Date();
    }

    @BeforeRemove()
    deleteDates() {
        this.deleted_at = new Date();
    }
}

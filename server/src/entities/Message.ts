import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity() // db table
export class Message extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field((_type) => ID)
	@Column()
	roomId!: number;

	@Field((_type) => ID)
	@Column()
	userId!: number;

	@Field()
	@Column()
	message!: string;

	@Field((_type) => User)
	@ManyToOne(() => User, (user) => user.messages)
	user: User;

	@Field()
	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@Field()
	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;
}

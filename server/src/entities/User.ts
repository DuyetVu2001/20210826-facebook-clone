import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { Message } from './Message';
import { Post } from './Post';

@ObjectType()
@Entity() // db table
export class User extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column({ unique: true })
	username!: string;

	@Column()
	password: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	avatar: string;

	@OneToMany(() => Post, (post) => post.user)
	posts: Post[];

	@OneToMany(() => Message, (message) => message.user)
	messages: Message[];

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;
}

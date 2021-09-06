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
export class Post extends BaseEntity {
	@Field((_type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	content!: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	keyword?: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	image?: string;

	@Field((_type) => ID)
	@Column()
	userId!: number;

	@Field((_type) => User)
	@ManyToOne(() => User, (user) => user.posts)
	user: User;

	@Field()
	@CreateDateColumn({ type: 'timestamptz' })
	createdAt: Date;

	@Field()
	@UpdateDateColumn({ type: 'timestamptz' })
	updatedAt: Date;
}

import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: string

    @Field()
    @Column()
    code!: string

    @Field()
    @Column()
    name!: string

    @Field({nullable: true})
    @Column({nullable: true})
    flag?: string

    @Field({nullable: true})
    @Column({nullable: true})
    continent?: string
}
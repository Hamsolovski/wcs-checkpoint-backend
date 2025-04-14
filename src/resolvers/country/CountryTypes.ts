import { Field, InputType } from "type-graphql"

@InputType()
export class CountryInput {
        @Field()
        code!: string
    
        @Field()
        name!: string
    
        @Field({nullable: true})
        flag?: string

        @Field({nullable: true})
        continent?: string

}
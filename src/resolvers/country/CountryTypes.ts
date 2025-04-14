import { Field, InputType } from "type-graphql"

@InputType()
export class CountryInput {
        @Field()
        code!: string
    
        @Field()
        name!: string
    
        @Field()
        flag?: string

}
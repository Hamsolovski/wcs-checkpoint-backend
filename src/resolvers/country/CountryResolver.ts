import { Arg, Mutation, Query } from "type-graphql";
import { Country } from "../../entities/Country";
import { CountryInput } from "./CountryTypes";


export class CountryResolver {
  // BROWSE ALL COUNTRIES
  @Query(() => [Country])
  async browseCountries() {
    const countries = await Country.find();
    return countries;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput) {
    const country = Country.create({
        code: data.code,
        name: data.name,
        flag: data.flag,
      });
    await country.save();
    return country;
  }
}

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

  // GET A COUNTRY BY CODE
  @Query(() => Country)
  async getCountryByCode(@Arg('code') code: string) {
    const country = await Country.findOne({
        where: {code}
    })
    return country
  }

  // GET COUNTRIES BY CONTINENT
  @Query(() => [Country])
  async getCountryByContinent(@Arg('continent') continent: string) {
    const country = await Country.find({
        where: {continent}
    })
    return country
  }

  // CREATE A COUNTRY
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput) {
    const country = Country.create({
        code: data.code,
        name: data.name,
        flag: data.flag,
        continent: data.continent,
      });
    await country.save();
    return country;
  }
}

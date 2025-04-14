import { buildSchema } from "type-graphql";
import { dataSource } from "./config/db";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountryResolver } from "./resolvers/country/CountryResolver";

const port = 3000;

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const apiServer = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(apiServer, {
    listen: { port },
  });
  console.log(`Server listening on port ${port}`);
};

start();

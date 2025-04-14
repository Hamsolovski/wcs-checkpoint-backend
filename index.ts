import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./database/db.sqlite",
    entities: [Country],
    synchronize: true,
})
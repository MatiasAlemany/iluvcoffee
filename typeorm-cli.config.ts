import { CoffeeRefactor1733158795252 } from "src/migrations/1733158795252-CoffeeRefactor";
import { DataSource } from "typeorm";
import { Coffee } from "./src/coffees/entities/coffee.entity";
import { Flavor } from "./src/coffees/entities/flavor.entity";
import { SchemaSync1733159888474 } from "src/migrations/1733159888474-SchemaSync";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1733158795252, SchemaSync1733159888474],
})
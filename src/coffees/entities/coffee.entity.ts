import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() // sql table === "coffee"
export class Coffee {
    @PrimaryGeneratedColumn() // sql column === "id"
    id: number;

    @Column() // sql column === "name"
    name: string;

    @Column() // sql column === "price"
    brand: string;

    @Column('json', {nullable: true}) // sql column === "flavors"
    flavors: string[];
}
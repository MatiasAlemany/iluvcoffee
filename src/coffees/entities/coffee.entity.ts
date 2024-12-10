import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === "coffee"
export class Coffee {
  @PrimaryGeneratedColumn() // sql column === "id"
  id: number;

  @Column() // sql column === "name"
  name: string;

  @Column({nullable: true}) // sql column === "description"
  description: string;

  @Column() // sql column === "brand"
  brand: string;

  @Column({default: 0}) // sql column === "recommendations"
  recommendations: number;

  @JoinTable()
  @ManyToMany(
    (type) => Flavor,
     (flavor) => flavor.coffees,
     {
        cascade:true,
     }
    ) // sql column === "flavors"
  flavors: Flavor[];
}



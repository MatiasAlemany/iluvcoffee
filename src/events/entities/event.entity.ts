import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";


@Index(['type', 'name'])
@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Index()
    @Column()
    name: string;

    @Column({ type: 'json', nullable: true }) 
    payloads: Record<string, any>;
}

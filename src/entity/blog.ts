import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    title: string;
    @Column()
    content: string ;
    @Column()
    owner: string ;
}
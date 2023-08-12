import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";



@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column()
    age: number;

    @Column()
    salary : string;

}

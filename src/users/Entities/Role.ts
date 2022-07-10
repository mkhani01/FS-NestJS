import {Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import {Permission} from "./Permission";

@Entity()
export class Role {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        nullable: true,
    })
    name: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    roles: Permission[];

    @Column({
        nullable: true,
    })
    color: string;

}
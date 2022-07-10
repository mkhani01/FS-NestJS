import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        unique: true,
    })
    name: string
}
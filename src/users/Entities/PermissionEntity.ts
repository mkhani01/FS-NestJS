import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PermissionEntity {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        unique: true,
    })
    name: string
}
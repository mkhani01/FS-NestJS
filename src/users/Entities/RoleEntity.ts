import {Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import {PermissionEntity} from "./PermissionEntity";

@Entity()
export class RoleEntity {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        nullable: true,
    })
    name: string;

    @ManyToMany(() => PermissionEntity)
    @JoinTable()
    permissions: PermissionEntity[];

    @Column({
        nullable: true,
    })
    color: string;

}
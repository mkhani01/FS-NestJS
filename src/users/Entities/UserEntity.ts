import {Column, Entity, JoinTable,ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {RoleEntity} from "./RoleEntity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn({
        type: "bigint"
    })
    id: number;

    @Column({
        nullable: true,
    })
    name: string;

    @Column({
        nullable: true,
    })
    lastName: string;

    @Column({
        unique: true,
    })
    username: string;

    @Column()
    password: string;

    @Column({
        unique: true,
    })
    phoneNumber: string;

    @Column({
        unique: true,
        nullable: true,
    })
    nationalCode: string;

    @Column({
        unique: true,
    })
    email: string;

    @ManyToMany(() => RoleEntity,{ cascade : true})
    @JoinTable()
    roles: RoleEntity[];

    @Column({
        nullable: true,
    })
    address: string;

}
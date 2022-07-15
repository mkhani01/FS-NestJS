import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from 'src/users/Entities/UserEntity';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  displayName: string;

  @Column('simple-array')
  permissions: string[];

  @Column({
    nullable: true,
  })
  color: string;

  @ManyToMany(() => UserEntity, (user) => user.roles)
  @JoinTable()
  users: UserEntity[];

  @Column({ nullable: true })
  description: string;
}

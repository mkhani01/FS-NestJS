import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { UserEntity } from 'src/users/Entities/UserEntity';
import { OwnerEntity } from '../../owner/Entities';

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

  @ManyToMany(() => UserEntity)
  @JoinTable()
  users: UserEntity[];

  @Column({ nullable: true })
  description: string;

  @OneToOne(() => OwnerEntity)
  owner: OwnerEntity;
}

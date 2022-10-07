import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../users/Entities';

@Entity()
export class OwnerEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @OneToMany(() => UserEntity, (user) => user.owners)
  users: UserEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

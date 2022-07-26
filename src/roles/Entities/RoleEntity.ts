import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
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

  @OneToOne(() => UserEntity)
  @JoinColumn()
  created_by: UserEntity;

  @Column({ nullable: true })
  description: string;

  @OneToOne(() => OwnerEntity)
  @JoinColumn()
  owner: OwnerEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

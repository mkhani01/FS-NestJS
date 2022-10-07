import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from 'src/users/Entities/UserEntity';
import { OwnerEntity } from 'src/owner/Entities';
import { PermissionEntity } from 'src/permissions/Entities';

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  displayName: string;

  @ManyToMany(() => PermissionEntity)
  @JoinTable()
  permissions: PermissionEntity[];

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

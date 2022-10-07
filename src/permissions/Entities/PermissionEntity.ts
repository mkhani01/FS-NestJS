import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, unique: true })
  key: string;

  @Column({ nullable: true })
  displayName?: string;

  @ManyToOne(() => PermissionEntity, (permission) => permission.children)
  parent: PermissionEntity;

  @OneToMany(() => PermissionEntity, (permission) => permission.parent, {
    cascade: true,
    eager: true,
  })
  children: PermissionEntity[];
}

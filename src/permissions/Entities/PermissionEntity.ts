import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class PermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, unique: true })
  key: string;

  @Column({ nullable: true })
  displayName?: string;

  @TreeChildren()
  children: PermissionEntity[];

  @TreeParent()
  parent: PermissionEntity;
}

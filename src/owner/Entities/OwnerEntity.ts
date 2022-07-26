import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

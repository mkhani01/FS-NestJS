import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

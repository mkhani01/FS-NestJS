import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from 'src/roles/Entities';
import { OwnerEntity } from 'src/owner/Entities';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
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

  @Column({ select: false })
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

  @ManyToMany(() => RoleEntity)
  @JoinTable()
  roles: RoleEntity[];

  @Column({
    nullable: true,
  })
  address: string;

  @OneToOne(() => OwnerEntity)
  @JoinColumn()
  defaultOwner: OwnerEntity;

  @ManyToMany(() => OwnerEntity, void 0, { cascade: true, eager: true })
  @Exclude({ toPlainOnly: true })
  @JoinTable()
  owners: OwnerEntity[];

  @Column({
    default: false,
  })
  isMainUser: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async encryptPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

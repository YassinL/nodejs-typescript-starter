import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Progresse } from "./progresse";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", {
    length: 50,
  })
  firstName: string;

  @Column("varchar", {
    length: 50,
  })
  lastName: string;

  @Column({ unique: true, name: "email" })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Progresse, (progresse) => progresse.user)
  progresses: Progresse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

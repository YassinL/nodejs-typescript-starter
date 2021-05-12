import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Progresse } from "./progress";

@Entity()
export class User {
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

  @OneToMany((type) => Progresse, (progresse) => progresse.user)
  progresses: Progresse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

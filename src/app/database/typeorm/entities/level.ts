import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Progresse } from "./progresse";

@Entity()
export class Level {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    type: "int",
    width: 3,
  })
  number: number;

  @Column("varchar", {
    length: 50,
  })
  name: string;

  @OneToMany(() => Progresse, (progresse) => progresse.level)
  progresses: Progresse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

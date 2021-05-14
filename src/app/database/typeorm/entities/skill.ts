import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Category } from "./category";
import { Progresse } from "./progresse";

@Entity()
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", {
    length: 50,
  })
  name: string;

  @Column("varchar", {
    length: 255,
  })
  description: string;

  @ManyToOne(() => Category, (category) => category.skills)
  @JoinColumn({ name: "categoryId" })
  category: Category;

  @OneToMany(() => Progresse, (progresse) => progresse.skill)
  progresses: Progresse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

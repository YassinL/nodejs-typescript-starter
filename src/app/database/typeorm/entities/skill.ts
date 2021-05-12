import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Category } from "./category";
import { Progresse } from "./progress";

@Entity()
export class Skill {
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

  @ManyToOne((type) => Category, (category) => category.skills)
  @JoinColumn({ name: "categoryId" })
  category: Category;

  @OneToMany((type) => Progresse, (progresse) => progresse.skill)
  progresses: Progresse[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

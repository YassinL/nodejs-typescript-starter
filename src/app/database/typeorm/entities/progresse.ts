import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { User } from "./user";
import { Skill } from "./skill";
import { Level } from "./level";

@Entity()
export class Progresse extends BaseEntity {
  @PrimaryColumn()
  skillId: number;

  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  levelId: number;

  @ManyToOne(() => User, (user) => user.progresses, { primary: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Skill, (skill) => skill.progresses, { primary: true })
  @JoinColumn({ name: "skillId" })
  skill: Skill;

  @ManyToOne(() => Level, (level) => level.progresses, { primary: true })
  @JoinColumn({ name: "levelId" })
  level: Level;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

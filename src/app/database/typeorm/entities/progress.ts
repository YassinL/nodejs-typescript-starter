import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Level } from "./level";
import { Skill } from "./skill";
import { User } from "./user";

@Entity()
export class Progresse {
  @PrimaryColumn()
  skillId: number;

  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  levelId: number;

  @ManyToOne(() => Skill, (skill) => skill.progresses, { primary: true })
  @JoinColumn({ name: "skillId" })
  skill: Skill;

  @ManyToOne(() => User, (user) => user.progresses, { primary: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Level, (level) => level.progresses, { primary: true })
  @JoinColumn({ name: "levelId" })
  level: Level;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

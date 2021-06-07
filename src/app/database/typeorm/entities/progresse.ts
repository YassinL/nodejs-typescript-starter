import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Student } from "./student";
import { Skill } from "./skill";
import { Level } from "./level";

@Entity()
export class Progresse extends BaseEntity {
  @PrimaryColumn()
  skillId: number;

  @PrimaryColumn()
  studentId: number;

  @PrimaryColumn()
  levelId: number;

  @ManyToOne(() => Student, (student) => student.progresses, { primary: true })
  @JoinColumn({ name: "studentId" })
  student: Student;

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

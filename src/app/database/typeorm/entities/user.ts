import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToOne,
} from "typeorm";
import { Student } from "./student";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true, name: "email" })
  email!: string;

  @Column("varchar", {
    length: 255,
  })
  password!: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToOne(() => Student, (student) => student.user) // specify inverse side as a second parameter
  student: Student;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

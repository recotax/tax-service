import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { nullable: true })
  column1!: string;

  @Column("text", { nullable: true })
  column2!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;
}

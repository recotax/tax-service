import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Sales } from "./Sales";
import { Purchases } from "./Purchases";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, name: "company_name" })
  companyName!: string;

  @Column({ type: "varchar", length: 18 })
  CNPJ!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;

  @Column({ type: "timestamp", nullable: true })
  deletedAt!: Date;

  @OneToMany(() => Sales, (sales) => sales.company)
  sales!: Sales[];

  @OneToMany(() => Purchases, (purchases) => purchases.company)
  purchases!: Purchases[];
}

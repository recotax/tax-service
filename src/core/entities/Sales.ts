import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Company } from "@core/entities/Company";

@Entity("sales")
export class Sales {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Company, (company) => company.sales, { onDelete: "CASCADE" })
  @JoinColumn({ name: "company_id" })
  company!: Company;

  @Column({ type: "varchar", length: 255 })
  nfeKey!: string;

  @Column({ type: "varchar", length: 255 })
  productDescription!: string;

  @Column({ type: "varchar", length: 255 })
  productCode!: string;

  @Column({ type: "timestamp" })
  issueDate!: Date;

  @Column({ type: "varchar", length: 255 })
  NCM!: string;

  @Column({ type: "varchar", length: 255 })
  CEST!: string;

  @Column({ type: "varchar", length: 10 })
  CFOP!: string;

  @Column({ type: "int" })
  productQuantity!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  unitPrice!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ type: "int" })
  orig!: number;

  @Column({ type: "int" })
  cstCsosn!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  icmsBase!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  pIcms!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  vIcms!: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt!: Date;
}

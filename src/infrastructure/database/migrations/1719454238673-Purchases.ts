import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Purchases1719454238673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "purchases",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "company_id",
            type: "int",
          },
          {
            name: "nfe_key",
            type: "varchar",
            length: "255",
          },
          {
            name: "product_description",
            type: "varchar",
            length: "255",
          },
          {
            name: "product_code",
            type: "varchar",
            length: "255",
          },
          {
            name: "issue_date",
            type: "timestamp",
          },
          {
            name: "NCM",
            type: "varchar",
            length: "255",
          },
          {
            name: "CEST",
            type: "varchar",
            length: "255",
          },
          {
            name: "CFOP",
            type: "varchar",
            length: "10",
          },
          {
            name: "product_quantity",
            type: "int",
          },
          {
            name: "unit_price",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "total",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "unit_icms",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "unit_icmsst",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "orig",
            type: "int",
          },
          {
            name: "cst_csosn",
            type: "int",
          },
          {
            name: "icms_base",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "p_icms",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "v_icms",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "pmvast",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "vbcst",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "p_icmsst",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "v_icmsst",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "purchases",
      new TableForeignKey({
        columnNames: ["company_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the foreign key first before dropping the table
    const purchsesTable = await queryRunner.getTable("purchses");
    // If the purchases table is found, proceed to drop the foreign key and then the table
    if (purchsesTable) {
      const foreignKey = purchsesTable.foreignKeys.find(
        (fk) => fk.columnNames.indexOf("company_id") !== -1
      );

      // Drop the foreign key if it exists
      if (foreignKey) {
        await queryRunner.dropForeignKey("purchases", foreignKey);
      }

      // Drop the purchases table
      await queryRunner.dropTable("purchases");
    }
  }
}

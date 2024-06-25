import { DataSourceOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
  synchronize: true,
  entities: ["./src/core/entities/*.ts"],
  migrations: ["./src/infrastructure/database/migrations/*.ts"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

export default dataSourceOptions;

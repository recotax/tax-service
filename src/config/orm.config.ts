import { DataSource } from "typeorm";

// Using environment variables
import dotenv from "dotenv";
dotenv.config();

const connectDB = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306 || process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
  synchronize: true,
  entities: ["./src/models/*.ts"],
  migrations: ["./src/migrations/*.ts"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;

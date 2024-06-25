import { DataSource } from "typeorm";
import dataSourceOptions from "./orm.config";

const connectDB = new DataSource(dataSourceOptions);

export const initializeDB = async (): Promise<void> => {
  try {
    await connectDB.initialize();
    console.log("Data Source has been initialized");
  } catch (err) {
    console.error("Data Source initialization error", err);
    throw err;
  }
};

export default connectDB;

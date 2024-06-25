import { App } from "./app";
import dotenv from "dotenv";
import { initializeDB } from "./infrastructure/database/dbconnection";

const app = new App();
dotenv.config();

const startServer = async () => {
  try {
    await initializeDB();
    app.listen();
  } catch (error) {
    console.error("Failed to initialize the application", error);
  }
};

startServer();

import { App } from "./app";
import dotenv from "dotenv";

const start = (): void => {
  const app = new App();
  dotenv.config();
  app.listen();
};

start();

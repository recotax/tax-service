import express, { Application } from "express";
import { applyMiddleware } from "@infrastructure/server/middleware";
import { registerRoutes } from "@infrastructure/server/routes/index";

export class App {
  private readonly app: Application;
  private readonly APPLICATION_RUNNING = "Application is running on:";

  constructor(
    private readonly port: string | number = process.env.SERVER_PORT || 3000
  ) {
    this.app = express();
    this.initializeMiddleWare();
    this.initializeRoutes();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.info(`${this.APPLICATION_RUNNING} ${this.port}`);
    });
  }

  private initializeMiddleWare(): void {
    applyMiddleware(this.app);
  }

  private initializeRoutes(): void {
    registerRoutes(this.app);
  }
}

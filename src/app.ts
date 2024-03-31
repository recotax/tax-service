import cors from "cors";
import express, { Application } from "express";
import { Code } from "./enum/code.enum";
import { HttpResponse } from "./domain/response";
import { Status } from "./enum/status.enum";
import { testRoutes } from "./routes/test.routes";

export class App {
  private readonly app: Application;
  private readonly APPLICATION_RUNNING = "Application is running on:";

  constructor(
    private readonly port: string | number = process.env.SERVER_PORT || 3000
  ) {
    this.app = express();
    this.middleWare();
    this.routes();
  }

  listen(): void {
    this.app.listen(this.port);
    console.info(`${this.APPLICATION_RUNNING} ${this.port}`);
  }

  middleWare(): void {
    this.app.use(cors({ origin: "*" }));
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/test", testRoutes);
    this.app.get("/health", (_, res) =>
      res
        .status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, "Server is running"))
    );
    this.app.all("*", (_, res) =>
      res
        .status(Code.NOT_FOUND)
        .send(
          new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "Page not found")
        )
    );
  }
}

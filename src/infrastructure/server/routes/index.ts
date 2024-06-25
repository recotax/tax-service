import { Application } from "express";
import { testRoutes } from "./test.routes";
import { Code } from "../../../core/enums/code.enum";
import { HttpResponse } from "../../../core/domain/response";
import { Status } from "../../../core/enums/status.enum";

export const registerRoutes = (app: Application): void => {
  app.use("/test", testRoutes);
  app.get("/health", (_, res) =>
    res
      .status(Code.OK)
      .send(new HttpResponse(Code.OK, Status.OK, "Server is running"))
  );
  app.all("*", (_, res) =>
    res
      .status(Code.NOT_FOUND)
      .send(
        new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "Page not found")
      )
  );
};

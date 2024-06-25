import cors from "cors";
import express, { Application } from "express";

export const applyMiddleware = (app: Application): void => {
  app.use(cors({ origin: "*" }));
  app.use(express.json());
};

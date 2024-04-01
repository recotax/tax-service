import { Router } from "express";
import { TestController } from "../controller/test.controller";

const testController = new TestController();
export const testRoutes = Router();

testRoutes.route("/").get(testController.getTests);

import { Repository } from "typeorm";
import { Test } from "./../models/test";
import connectDB from "../config/orm.config";
import { Request, Response } from "express";
import { Code } from "../enum/code.enum";
import { HttpResponse } from "../domain/response";
import { Status } from "../enum/status.enum";

export class TestController {
  private testRepository: Repository<Test>;

  constructor() {
    this.testRepository = connectDB.getRepository(Test);
  }

  async getTests(req: Request, res: Response): Promise<Response<Test[]>> {
    try {
      const result = await this.testRepository.find({
        order: { created_at: "DESC" },
        take: 50,
      });

      return res
        .status(Code.OK)
        .send(
          new HttpResponse(Code.OK, Status.OK, "Data retrieved", result[0])
        );
    } catch (error) {
      return res
        .status(Code.INTERNAL_SERVER_ERROR)
        .send(
          new HttpResponse(
            Code.INTERNAL_SERVER_ERROR,
            Status.INTERNAL_SERVER_ERROR,
            "Error occurred"
          )
        );
    }
  }
}

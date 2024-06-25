import { Router } from "express";
import { CompanyController } from "../../../adapters/controllers/CompanyController";
import { CompanyUseCase } from "../../../core/usecases/CompanyUseCase";
import { TypeORMCompanyRepository } from "../../../infrastructure/database/repositories/TypeORMCompanyRepository";
import connectDB from "../../database/dbconnection";

const testRoutes = Router();
const companyRepository = new TypeORMCompanyRepository(connectDB);
const companyUseCase = new CompanyUseCase(companyRepository);
const companyController = new CompanyController(companyUseCase);

testRoutes
  .route("/")
  .get((req, res) => companyController.getAllCompanies(req, res));

export { testRoutes };

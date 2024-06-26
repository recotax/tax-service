import { Request, Response } from "express";
import { CompanyUseCase } from "@core/usecases/CompanyUseCase";

export class CompanyController {
  constructor(private readonly companyUseCase: CompanyUseCase) {}

  async getAllCompanies(req: Request, res: Response): Promise<void> {
    try {
      const companies = await this.companyUseCase.getAllCompanies();
      res.json(companies);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getCompanyById(req: Request, res: Response): Promise<void> {
    const companyId = Number(req.params.id);
    try {
      const company = await this.companyUseCase.getCompanyById(companyId);
      if (!company) {
        res.status(404).json({ error: "Company not found" });
        return;
      }
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async saveCompany(req: Request, res: Response): Promise<void> {
    const newCompany = req.body;
    try {
      const savedCompany = await this.companyUseCase.saveCompany(newCompany);
      res.status(201).json(savedCompany);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteCompany(req: Request, res: Response): Promise<void> {
    const companyId = Number(req.params.id);
    try {
      await this.companyUseCase.deleteCompany(companyId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

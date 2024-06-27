import { Company } from "@entities/Company";
import { BaseRepository } from "@interfaces/BaseRepository";

export class CompanyUseCase {
  constructor(private readonly companyRepository: BaseRepository<Company>) {}

  async getAllCompanies(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async getCompanyById(id: number): Promise<Company | null> {
    return this.companyRepository.findById(id);
  }

  async createCompany(company: Company): Promise<Company> {
    return this.companyRepository.create(company);
  }

  async deleteCompany(id: number): Promise<void> {
    return this.companyRepository.delete(id);
  }
}

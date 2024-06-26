import { Company } from "@entities/Company";
import { CompanyRepository } from "@interfaces/CompanyRepository";

export class CompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async getAllCompanies(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async getCompanyById(id: number): Promise<Company | undefined> {
    return this.companyRepository.findById(id);
  }

  async getCompanyByCNPJ(cnpj: string): Promise<Company | undefined> {
    return this.companyRepository.findByCNPJ(cnpj);
  }

  async saveCompany(company: Company): Promise<Company> {
    return this.companyRepository.save(company);
  }

  async deleteCompany(id: number): Promise<void> {
    return this.companyRepository.delete(id);
  }
}

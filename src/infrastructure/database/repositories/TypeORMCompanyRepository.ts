// src/infrastructure/database/repositories/TypeORMCompanyRepository.ts
import { Repository } from "typeorm";
import { Company } from "@entities/Company";
import { CompanyRepository } from "@interfaces/CompanyRepository";

export class TypeORMCompanyRepository implements CompanyRepository {
  private repository: Repository<Company>;

  constructor(private readonly dataSource: any) {
    this.repository = dataSource.getRepository(Company);
  }

  async findAll(): Promise<Company[]> {
    const result = await this.repository.find();
    console.log(result);
    return result;
  }

  async findById(id: any): Promise<Company | undefined> {
    const company = await this.repository.findOne(id);
    return company || undefined;
  }

  async findByCNPJ(cnpj: string): Promise<Company | undefined> {
    const company = await this.repository.findOne({ where: { CNPJ: cnpj } });
    return company || undefined;
  }

  async save(company: Company): Promise<Company> {
    return await this.repository.save(company);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

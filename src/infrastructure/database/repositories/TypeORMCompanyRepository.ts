import { Repository } from "typeorm";
import { Company } from "@entities/Company";
import { BaseRepository } from "@interfaces/BaseRepository";

export class TypeORMCompanyRepository implements BaseRepository<Company> {
  private repository: Repository<Company>;

  constructor(private readonly dataSource: any) {
    this.repository = dataSource.getRepository(Company);
  }

  async findAll(): Promise<Company[]> {
    const result = await this.repository.find();
    return result;
  }

  async findById(id: any): Promise<Company | null> {
    const company = await this.repository.findOne(id);
    return company || null;
  }

  async create(company: Company): Promise<Company> {
    return await this.repository.save(company);
  }

  async update(company: Company): Promise<Company> {
    return await this.repository.save(company);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

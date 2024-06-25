import { Company } from "../entities/Company";

export interface CompanyRepository {
  findAll(): Promise<Company[]>;
  findById(id: number): Promise<Company | undefined>;
  findByCNPJ(cnpj: string): Promise<Company | undefined>;
  save(company: Company): Promise<Company>;
  delete(id: number): Promise<void>;
}

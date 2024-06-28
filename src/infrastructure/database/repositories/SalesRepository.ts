import { Repository } from "typeorm";
import { Sales } from "@entities/Sales";
import { BaseRepository } from "@interfaces/BaseRepository";

export class SalesRepository implements BaseRepository<Sales> {
  private repository: Repository<Sales>;

  constructor(private readonly dataSource: any) {
    this.repository = dataSource.getRepository(Sales);
  }

  async findAll(): Promise<Sales[]> {
    const result = await this.repository.find();
    return result;
  }

  async findById(id: any): Promise<Sales | null> {
    const sales = await this.repository.findOne(id);
    return sales || null;
  }

  async create(sales: Sales): Promise<Sales> {
    return await this.repository.save(sales);
  }

  async update(sales: Sales): Promise<Sales> {
    return await this.repository.save(sales);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

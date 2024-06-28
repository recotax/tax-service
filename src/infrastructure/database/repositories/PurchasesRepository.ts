import { Repository } from "typeorm";
import { Purchases } from "@entities/Purchases";
import { BaseRepository } from "@interfaces/BaseRepository";

export class PurchasesRepository implements BaseRepository<Purchases> {
  private repository: Repository<Purchases>;

  constructor(private readonly dataSource: any) {
    this.repository = dataSource.getRepository(Purchases);
  }

  async findAll(): Promise<Purchases[]> {
    const result = await this.repository.find();
    return result;
  }

  async findById(id: any): Promise<Purchases | null> {
    const purchases = await this.repository.findOne(id);
    return purchases || null;
  }

  async create(purchases: Purchases): Promise<Purchases> {
    return await this.repository.save(purchases);
  }

  async update(purchases: Purchases): Promise<Purchases> {
    return await this.repository.save(purchases);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

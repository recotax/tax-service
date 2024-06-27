export interface BaseRepository<T> {
  create(entity: T): Promise<T>;
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<void>;
}

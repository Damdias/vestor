export class Company {
  public id: string;
  public name: string;
  public shares: number;
  public stocks: Array<{
    id: string;
    stock: number;
    stockType: string;
  }>;

  constructor(id: string, name: string, shares?: number) {
    this.id = id;
    this.name = name;
    this.shares = shares;
  }
}

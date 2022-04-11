export class Company {
  public id: number;
  public name: string;
  public shares: number;

  constructor(id: number, name: string, shares: number) {
    this.id = id;
    this.name = name;
    this.shares = shares;
  }
}

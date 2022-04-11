export class Company {
  public id: string;
  public name: string;
  public shares: number;

  constructor(id: string, name: string, shares: number) {
    this.id = id;
    this.name = name;
    this.shares = shares;
  }
}

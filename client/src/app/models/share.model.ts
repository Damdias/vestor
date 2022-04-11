export class Share {
  public id: number;
  public name: string;
  public shares: number;
  public company: string;

  constructor(id: number, name: string, shares: number, company: string) {
    this.id = id;
    this.name = name;
    this.shares = shares;
    this.company = company;
  }
}

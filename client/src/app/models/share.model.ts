import { Company } from "./company.model";

export class Share {
  public id: string;
  public name: string;
  public stocks: number;
  public company: string;
  public companyId: Company; //Need to refactor this field

  constructor(
    id?: string,
    name?: string,
    stocks?: number,
    company?: string,
    companyId?: Company
  ) {
    this.id = id;
    this.name = name;
    this.stocks = stocks;
    this.company = company;
    this.companyId = companyId;
  }
}

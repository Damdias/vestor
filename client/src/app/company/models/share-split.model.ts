export class ShareSplit {
  public shares: number;
  public companyId: string;
  constructor(shares: number, companyId?: string) {
    this.shares = shares;
    this.companyId = companyId;
  }
}

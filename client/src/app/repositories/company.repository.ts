import { Injectable } from "@angular/core";
import { Company } from "../models/company.model";

@Injectable()
export class CompanyRepository {
  constructor() {
    this.companies.push(new Company("", "vestor", 100));
  }
  companies: Array<Company> = [];
  getAllCompany(): Array<Company> {
    return this.companies;
  }
  add(company: Company) {
    this.companies.push(company);
  }
}

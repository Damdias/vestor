import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "../models/company.model";
import { Observable } from "rxjs";

@Injectable()
export class CompanyRepository {
  constructor(private httpClient: HttpClient) {}

  getAllCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:5002/api/company");
  }
  add(company: Company) {
    const companyDTO = {
      name: company.name,
      userId: 1,
      stocks: [
        {
          stockType: "stand",
          stock: company.shares,
        },
      ],
    };
    return this.httpClient.post(
      "http://localhost:5002/api/company",
      companyDTO
    );
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "../models/company.model";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class CompanyRepository {
  constructor(private httpClient: HttpClient) {}

  getAllCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${environment.apiUrl}/api/company`);
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
      `${environment.apiUrl}/api/company`,
      companyDTO
    );
  }
}

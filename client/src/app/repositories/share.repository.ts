import { Injectable } from "@angular/core";
import { Share } from "../models/share.model";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ShareRepository {
  constructor(private httpClient: HttpClient) {}

  getAllShare(): Observable<Share[]> {
    return this.httpClient.get<Share[]>(
      `${environment.apiUrl}/api/shareholder`
    );
  }
  add(shareholder: Share) {
    return this.httpClient.post(`${environment.apiUrl}/api/shareholder`, {
      name: shareholder.name,
      stocks: shareholder.stocks,
      companyId: shareholder.companyId.id,
    });
  }
  delete(id: string) {
    return this.httpClient.delete(
      `${environment.apiUrl}/api/shareholder/${id}`
    );
  }
  edit(shareholder: Share) {
    return this.httpClient.put(`${environment.apiUrl}/api/shareholder`, {
      name: shareholder.name,
      stocks: shareholder.stocks,
      companyId: shareholder.companyId.id,
      id: shareholder.id,
    });
  }
}

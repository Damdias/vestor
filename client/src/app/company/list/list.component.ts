import { Component, OnInit } from "@angular/core";
import { Company } from "src/app/models/company.model";
import { CompanyRepository } from "src/app/repositories/company.repository";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private companyRepository: CompanyRepository) {}
  companies: Company[] = [];
  ngOnInit(): void {
    this.companyRepository.getAllCompany().subscribe((item) => {
      this.companies = item.map((c) => this.mapTo(c));
    });
  }

  newHandler(event: Company) {
    this.companyRepository.add(event).subscribe((item) => {
      this.companies.push(event);
    });
  }
  private mapTo(company: Company): Company {
    return new Company(
      company.id,
      company.name,
      company.stocks.map((a) => a.stock).reduce((a, b) => a + b)
    );
  }
}

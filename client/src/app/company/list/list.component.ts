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

  ngOnInit(): void {}

  get Companies(): Company[] {
    return this.companyRepository.getAllCompany();
  }
  newHandler(event: Company) {
    this.companyRepository.add(event);
  }
}

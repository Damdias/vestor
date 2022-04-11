import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CompanyRepository } from "../repositories/company.repository";
import { CreateComponent } from "./create/create.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "company",
        component: ListComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [CompanyRepository],
})
export class CompanyModule {}

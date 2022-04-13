import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CompanyRepository } from "../repositories/company.repository";
import { CreateComponent } from "./create/create.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SplitShareComponent } from './split-share/split-share.component';

@NgModule({
  declarations: [ListComponent, CreateComponent, SplitShareComponent],
  imports: [
    CommonModule,
    HttpClientModule,
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

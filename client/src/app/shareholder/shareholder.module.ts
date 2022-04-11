import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { ShareRepository } from "../repositories/share.repository";
import { CompanyRepository } from "../repositories/company.repository";
import { FormsModule } from "@angular/forms";
import { CreateShareHolderComponent } from "./create-share-holder/create-share-holder.component";

@NgModule({
  declarations: [ListComponent, ListComponent, CreateShareHolderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "share-holders",
        component: ListComponent,
      },
    ]),
  ],
  exports: [],
  providers: [ShareRepository, CompanyRepository],
})
export class ShareholderModule {}

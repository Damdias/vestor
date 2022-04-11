import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharesComponent } from "./shares/shares.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SharesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "dashboard",
        component: SharesComponent,
      },
    ]),
  ],
})
export class DashboardModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyModule } from "./company/company.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ShareholderModule } from "./shareholder/shareholder.module";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardModule } from "./dashboard/dashboard.module";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    ShareholderModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "**", component: NotFoundComponent },
    ]),
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

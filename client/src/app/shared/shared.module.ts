import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AlertComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, MainComponent, AlertComponent],
})
export class SharedModule {}

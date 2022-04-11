import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Company } from "src/app/models/company.model";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @ViewChild("content", { static: true }) content: ElementRef;
  @Input() title: string;
  @Output() newCompanyEvent = new EventEmitter<Company>();

  company: Company = new Company(0, "", 0);

  closeResult = "";
  ngOnInit(): void {}

  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  save() {
    this.newCompanyEvent.emit(this.company);
    this.modalService.dismissAll();
  }
}

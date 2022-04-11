import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Company } from "src/app/models/company.model";
import { Share } from "src/app/models/share.model";
import { CompanyRepository } from "src/app/repositories/company.repository";

@Component({
  selector: "app-create-share-holder",
  templateUrl: "./create-share-holder.component.html",
  styleUrls: ["./create-share-holder.component.scss"],
})
export class CreateShareHolderComponent implements OnInit {
  constructor(
    private companyRepository: CompanyRepository,
    private modalService: NgbModal
  ) {}
  @ViewChild("share_content", { static: true }) content: ElementRef;
  @Input() title: string;
  @Output() newCompanyEvent = new EventEmitter<Share>();

  share: Share = new Share("", "", 0, "");
  closeResult = "";
  selectedCompany: Company;

  ngOnInit(): void {
    this.selectedCompany = this.allCompanies[0];
  }

  get allCompanies(): Company[] {
    return this.companyRepository.getAllCompany();
  }
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
    alert("alert");
    console.log("share ", this.share);
    console.log("company", this.selectedCompany);
  }
}

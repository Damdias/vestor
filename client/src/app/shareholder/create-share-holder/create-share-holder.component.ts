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
import { iif } from "rxjs";
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
  @Output() onCreate = new EventEmitter<Share>();
  @Output() onEdit = new EventEmitter<Share>();

  share: Share;
  closeResult = "";
  selectedCompany: Company;
  companies: Array<Company> = [];

  ngOnInit(): void {
    this.companyRepository.getAllCompany().subscribe((item) => {
      this.companies = item.map((c) => new Company(c.id, c.name));
      this.selectedCompany = this.companies[0];
    });
  }

  open(shareHolder?: Share) {
    if (shareHolder) {
      this.share = shareHolder;
    } else {
      this.share = new Share("", "", 0, "");
    }
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
    this.share.companyId = this.selectedCompany;
    if (this.share.id != "") {
      this.onEdit.emit(this.share);
    } else {
      this.onCreate.emit(this.share);
    }
    this.modalService.dismissAll();
  }
}

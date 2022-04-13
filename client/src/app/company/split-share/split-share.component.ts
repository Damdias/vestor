import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  ElementRef,
  EventEmitter,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ShareSplit } from "../models/share-split.model";

@Component({
  selector: "app-split-share",
  templateUrl: "./split-share.component.html",
  styleUrls: ["./split-share.component.scss"],
})
export class SplitShareComponent implements OnInit {
  @ViewChild("share_split", { static: true }) content: ElementRef;
  @Input() title: string;
  @Output() onSplit = new EventEmitter<ShareSplit>();
  constructor(private modalService: NgbModal) {}

  splitShare: ShareSplit;

  ngOnInit(): void {}

  split() {
    this.modalService.dismissAll();
  }

  open(companyId: string) {
    this.splitShare = new ShareSplit(0);
    this.splitShare.companyId = companyId;
    this.modalService
      .open(this.content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {},
        (reason) => {
          this.onSplit.emit(this.splitShare);
        }
      );
  }
}

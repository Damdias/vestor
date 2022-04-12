import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Share } from "src/app/models/share.model";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit {
  @ViewChild("share_delete ", { static: true }) content: ElementRef;
  @Input() title: string;
  @Output() onDeleteConfirm = new EventEmitter<object>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  delete() {
    this.modalService.dismissAll();
  }

  open(shareHolder?: Share) {
    this.modalService
      .open(this.content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          console.log("result");
        },
        (reason) => {
          this.onDeleteConfirm.emit(shareHolder);
        }
      );
  }
}

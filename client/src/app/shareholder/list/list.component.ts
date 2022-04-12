import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Share } from "src/app/models/share.model";
import { ShareRepository } from "src/app/repositories/share.repository";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private shareRepository: ShareRepository) {}
  shareHolders: Array<Share> = [];
  ngOnInit(): void {
    this.getAllShares();
  }
  deletePending: Share = null;
  getAllShares() {
    return this.shareRepository.getAllShare().subscribe((shares) => {
      this.shareHolders = shares;
    });
  }
  creteHandler(shareHolder: Share) {
    this.shareRepository.add(shareHolder).subscribe((res) => {
      this.getAllShares();
    });
  }
  deleteHandler(shareHolder: Share) {
    this.shareRepository.delete(shareHolder.id).subscribe((res) => {
      this.getAllShares();
    });
  }
  editHandler(shareHolder: Share) {
    this.shareRepository.edit(shareHolder).subscribe((res) => {
      this.getAllShares();
    });
  }
  deleteConfirmHandler(event: object) {
    if (event) {
      this.deleteHandler(event as Share);
    }
  }
}

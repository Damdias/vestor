import { Component, OnInit } from "@angular/core";
import { Share } from "src/app/models/share.model";
import { ShareRepository } from "src/app/repositories/share.repository";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  constructor(private shareRepository: ShareRepository) {}

  ngOnInit(): void {}
  get allShares() {
    return this.shareRepository.getAll();
  }
  newHandler(shareHolder: Share) {}
}

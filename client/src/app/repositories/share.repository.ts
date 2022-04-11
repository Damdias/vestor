import { Injectable } from "@angular/core";
import { Share } from "../models/share.model";

@Injectable()
export class ShareRepository {
  constructor() {
    this.shareholders.push(new Share("", "Damith", 100, "vestor"));
  }
  shareholders: Array<Share> = [];
  getAll(): Array<Share> {
    return this.shareholders;
  }
  add(shareholder: Share) {
    this.shareholders.push(shareholder);
  }
}

import { Component, OnInit } from "@angular/core";
import { Share } from "src/app/models/share.model";
import { ShareRepository } from "src/app/repositories/share.repository";

@Component({
  selector: "app-shares",
  templateUrl: "./shares.component.html",
  styleUrls: ["./shares.component.scss"],
})
export class SharesComponent implements OnInit {
  constructor(private shareRepository: ShareRepository) {}
  allStats: Array<Share> = [];
  ngOnInit(): void {
    this.getStats();
  }
  getStats() {
    return this.shareRepository.getAllShare().subscribe((shares) => {
      this.allStats = shares;
    });
  }
  get totalShares() {
    if (this.allStats.length > 0) {
      return this.allStats.map((a) => a.stocks).reduce((cur, pre) => cur + pre);
    } else {
      return 0;
    }
  }
  get totalCompany(): Array<string> {
    if (this.allStats.length === 0) {
      return [];
    }
    return this.allStats
      .map((a) => a.companyId.name)
      .reduce((cure: Array<string>, pre: string) => {
        console.log("pre", pre);
        if (!cure.find((a) => a === pre)) {
          cure.push(pre);
        }
        return [...cure];
      }, []);
  }

  get chartData() {
    return this.allStats
      .map((a) => ({ company: a.companyId.name, shares: a.stocks }))
      .reduce((cure, pre) => {
        const company = cure.find((a) => a.company === pre.company);
        if (!company) {
          cure.push(pre);
        } else {
          company.shares += pre.shares;
        }

        return [...cure];
      }, []);
  }
}

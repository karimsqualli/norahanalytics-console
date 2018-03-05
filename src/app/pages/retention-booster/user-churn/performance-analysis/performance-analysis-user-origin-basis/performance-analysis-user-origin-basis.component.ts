import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'performance-analysis-user-origin-basis',
  templateUrl: './performance-analysis-user-origin-basis.component.html',
  styleUrls: ['./performance-analysis-user-origin-basis.component.scss']
})
export class PerformanceAnalysisUserOriginBasisComponent implements OnInit {

  country;
  region;
  mobile;
  affluence;
  Platform;
  constructor(private http: HttpClient){
    this.http.get('../../../json/new/editednew_country-aggr-format.json').subscribe((data: any) => {
      this.country = data.country;
      console.log(data.country)
    });
    this.http.get('../../../json/new/editednew_region-aggr-format.json').subscribe((data: any) => {
      this.region = data.Region;
      console.log(data.Region)
    });
    this.http.get('../../../json/new/editednew_mobiles-aggr-format.json').subscribe((data: any) => {
      this.mobile = data.Mobile;
      // console.log(data.Mobile)
    });
    this.http.get('../../../json/new/editednew_afluance-aggr-format.json').subscribe((data: any) => {
      this.affluence = data.Affluence;
      // console.log(data.Affluence)
    });
    this.http.get('../../../json/new/editednew_platform-aggr-format.json').subscribe((data: any) => {
      this.Platform = data.Platform;
      // console.log(data.Platform)
    });
  }

  ngOnInit() {
  }

}

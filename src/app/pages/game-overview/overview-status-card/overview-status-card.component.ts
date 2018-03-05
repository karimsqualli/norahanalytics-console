import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'ngx-overview-status-card',
  templateUrl: './overview-status-card.component.html',
  styleUrls: ['./overview-status-card.component.scss']
})
export class OverviewStatusCardComponent implements OnInit {
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../json/churn-predictions/simple_churn_prediction_results.json').subscribe((data: any) => {
      this.data = data;
    });
  }

}

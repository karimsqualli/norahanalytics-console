import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  data: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../json/churn-predictions/simple_churn_prediction_results.json').subscribe((data: any) => {
      this.data = data;
    });
  }

}

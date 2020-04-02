import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.page.html',
  styleUrls: ['./record-details.page.scss'],
})
export class RecordDetailsPage implements OnInit {

  amount: any;
  orderType: any;
  time: any;
  cardOrCompany: any;
  id: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.amount = this.activateRoute.snapshot.queryParamMap.get('amount');
    this.orderType = this.activateRoute.snapshot.queryParamMap.get('orderType');
    this.time = this.activateRoute.snapshot.queryParamMap.get('time');
    this.cardOrCompany = this.activateRoute.snapshot.queryParamMap.get('cardOrCompany');
    this.id = this.activateRoute.snapshot.queryParamMap.get('id');
   }

  ngOnInit() {

  }

}

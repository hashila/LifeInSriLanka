import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-show-customer-details',
  templateUrl: './show-customer-details.component.html',
  styleUrls: ['./show-customer-details.component.css']
})
export class ShowCustomerDetailsComponent implements OnInit {

  users :Observable<any>;
  charitys :Observable<any>;

  constructor(afd :AngularFireDatabase) {

    this.users = afd.list('/userReq/').valueChanges();
    this.charitys = afd.list('/charityreq/').valueChanges();
    console.log(this.users);

  }

  ngOnInit() {
  }

}

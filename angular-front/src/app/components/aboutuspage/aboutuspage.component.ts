import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-aboutuspage',
  templateUrl: './aboutuspage.component.html',
  styleUrls: ['./aboutuspage.component.css']
})
export class AboutuspageComponent implements OnInit {

users :Observable<any>;

  constructor(afd :AngularFireDatabase) {

      this.users = afd.list('/contactus/').valueChanges();

  }

  ngOnInit() {
  }

}

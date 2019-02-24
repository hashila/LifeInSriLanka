import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
<<<<<<< HEAD
import { Observable ,of} from 'rxjs';
=======

import { Observable, of } from 'rxjs';


>>>>>>> 4e74b19bebd22fcbb7b92525e6044f122b08abef



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users :Observable<any>;

  constructor(afd :AngularFireDatabase) {

    this.users = afd.list('/newpost/').valueChanges();
    console.log(this.users);
   }

  ngOnInit() {
  }

}

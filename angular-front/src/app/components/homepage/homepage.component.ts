import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
<<<<<<< HEAD
import { Observable ,of} from 'rxjs';
=======


import { Observable, of } from 'rxjs';



>>>>>>> 707dfd8f2ca2ecc18d68a40fc8e7c885a26cc064


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

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
<<<<<<< HEAD
import { Observable ,of} from 'rxjs';
=======
import { Observable, of } from 'rxjs';

>>>>>>> e0606b12f71f4877ab5a1b22daddce1767c15c5a



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

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable ,of} from 'rxjs';



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

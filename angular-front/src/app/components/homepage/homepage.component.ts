import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
<<<<<<< HEAD

import { Observable ,of} from 'rxjs';
=======
>>>>>>> 92c23d4e6a25681960a7b8bd6546a70be8709417





<<<<<<< HEAD




=======
>>>>>>> 92c23d4e6a25681960a7b8bd6546a70be8709417
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {

  users :Observable<any>;

  constructor(afd :AngularFireDatabase) {

    this.users = afd.list('/newpost/').valueChanges();
    console.log(this.users);
   }

  ngOnInit() {
  }



}

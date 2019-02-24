import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-documentationpage',
  templateUrl: './documentationpage.component.html',
  styleUrls: ['./documentationpage.component.css']
})
export class DocumentationpageComponent implements OnInit {
users :Observable<any>;
  constructor(afd :AngularFireDatabase) {

    this.users = afd.list('/newpost/').valueChanges();
    console.log(this.users);

   }

  ngOnInit() {
  }

}

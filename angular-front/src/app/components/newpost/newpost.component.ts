import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  titletxt:string;
  bodytxt:string;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }

  submitfunc(){

    this.db.list('/newpost/'+this.titletxt).push({

      Titletxt: this.titletxt,
      bosytxt: this.bodytxt


    });
  }

}

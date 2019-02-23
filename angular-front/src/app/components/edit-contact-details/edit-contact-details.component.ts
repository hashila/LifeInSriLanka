import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-edit-contact-details',
  templateUrl: './edit-contact-details.component.html',
  styleUrls: ['./edit-contact-details.component.css']
})
export class EditContactDetailsComponent implements OnInit {


  nametxt:string;
  phonetxt:string;
  emailtxt:string;
  messagetxt:string;

  constructor(public db: AngularFireDatabase) {

  }

  ngOnInit() {
  }

  submitfunc(){

    console.log(this.nametxt+" "+this.phonetxt+" "+this.emailtxt+" "+this.messagetxt);
    this.db.list('/userMessages/'+this.nametxt).push({

      name: this.nametxt,
      phonenum: this.phonetxt,
      email: this.emailtxt,
      message: this.messagetxt

    });
  }


}

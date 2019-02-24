import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-edit-contact-details',
  templateUrl: './edit-contact-details.component.html',
  styleUrls: ['./edit-contact-details.component.css']
})
export class EditContactDetailsComponent implements OnInit {


  

  nametxt:string;
  phonetxt:string;
  emailtxt:string;
  addresstxt:string;

  facebook:string;
  twitter:string;
  insta:string;

  constructor(public db: AngularFireDatabase,public flash:FlashMessagesService) {

  }

  ngOnInit() {
  }

submitfunc(){

    try{
        this.db.list('/contactus/').push({

        name: this.nametxt,
        phonenum: this.phonetxt,
        email: this.emailtxt,
        address: this.addresstxt,

        facebook: this.facebook,
        twitter: this.twitter,
        instagram: this.insta

    });
      this.flash.show('Successfully added to the database', { cssClass: 'alert-success', timeout: 5000 });
      this.nametxt="";
      this.nametxt="";
      this.phonetxt="";
      this.emailtxt="";
      this.addresstxt="";
      this.facebook="";
      this.twitter="";
      this.insta="";
    }catch(Error){
      console.log(Error);
      this.flash.show('Some thing went wrong...!', { cssClass: 'alert-danger', timeout: 5000 });
      this.nametxt="";
      this.phonetxt="";
      this.emailtxt="";
      this.addresstxt="";
      this.facebook="";
      this.twitter="";
      this.insta="";

  }

}



}

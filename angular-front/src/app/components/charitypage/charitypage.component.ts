import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-charitypage',
  templateUrl: './charitypage.component.html',
  styleUrls: ['./charitypage.component.css']
})
export class CharitypageComponent implements OnInit {


    nametxt:string;
    emailtxt:string;
    contacttxt:string;
    msgtxt:string;



  constructor(public db: AngularFireDatabase,public flash:FlashMessagesService) {






  }

  ngOnInit() {
  }



  submitfunc(){
      try{

        this.db.list('/charityreq/').push({

          name: this.nametxt,
          email: this.emailtxt,
          contact: this.contacttxt,
          message: this.msgtxt

        });
        this.flash.show('Successfully Sent', { cssClass: 'alert-success', timeout: 5000 });
        this.nametxt="";
        this.emailtxt="";
        this.contacttxt="";
        this.msgtxt="";

      }
      catch(error){
        console.log(error);
        this.flash.show('Something went wrong....!', { cssClass: 'alert-danger', timeout: 5000 });
        this.nametxt="";
        this.emailtxt="";
        this.contacttxt="";
        this.msgtxt="";


      }


  }







}

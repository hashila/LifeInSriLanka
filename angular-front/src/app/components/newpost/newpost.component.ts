import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  titletxt:string;
  bodytxt:string;
  half:string;

  constructor(public db: AngularFireDatabase,public flash:FlashMessagesService) { }

  ngOnInit() {
  }

  submitfunc(){

    this.db.list('/newpost/').push({



    });




    try{

      this.db.list('/newpost/').push({

        titletxt: this.titletxt,
        half: this.half,
        bodytxt: this.bodytxt

      });
      this.flash.show('Successfully added to the database', { cssClass: 'alert-success', timeout: 5000 });
      this.titletxt="";
      this.half="";
      this.bodytxt="";


    }
    catch(error){
      console.log(error);
      this.flash.show('Something went wrong....!', { cssClass: 'alert-danger', timeout: 5000 });
      this.titletxt="";
      this.half="";
      this.bodytxt="";


    }







  }

}

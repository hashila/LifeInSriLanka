import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username:string;
  password:string;


  constructor(public router:Router,public flash:FlashMessagesService) { }

  ngOnInit() {
  }

  login(){

      var uName = "admin";
      var pword = "admin";

      if(this.username == uName && this.password == pword){

        console.log("succeseeded");
        this.router.navigateByUrl('/dashboard');

      }
      else{
        this.flash.show('Invalid user name or password', { cssClass: 'alert-danger', timeout: 5000 });
      }


  }



}

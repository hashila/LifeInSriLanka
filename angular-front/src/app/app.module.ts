import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DocumentationpageComponent } from './components/documentationpage/documentationpage.component';
import { PackagespageComponent } from './components/packagespage/packagespage.component';
import { CharitypageComponent } from './components/charitypage/charitypage.component';
import { AboutuspageComponent } from './components/aboutuspage/aboutuspage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesigningAreaComponent } from './components/designing-area/designing-area.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { IndexPageEditComponent } from './components/index-page-edit/index-page-edit.component';
import { EditCharityPageComponent } from './components/edit-charity-page/edit-charity-page.component';
import { EditPackagesComponent } from './components/edit-packages/edit-packages.component';
import { ShowCustomerDetailsComponent } from './components/show-customer-details/show-customer-details.component';
import { EditContactDetailsComponent } from './components/edit-contact-details/edit-contact-details.component';
import { FormComponent } from './components/packagespage/form/form.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const config = {
    apiKey: "AIzaSyDBmn0NC7Qk1veMs0xlH2f8OmWT0MolciI",
    authDomain: "lifeinsrilanka-4b91f.firebaseapp.com",
    databaseURL: "https://lifeinsrilanka-4b91f.firebaseio.com",
    projectId: "lifeinsrilanka-4b91f",
    storageBucket: "lifeinsrilanka-4b91f.appspot.com",
    messagingSenderId: "1005022180919"
  };




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DocumentationpageComponent,
    PackagespageComponent,
    CharitypageComponent,
    AboutuspageComponent,
    DashboardComponent,
    FooterComponent,
    DesigningAreaComponent,
    TabsComponent,
    NewpostComponent,
    IndexPageEditComponent,
    EditCharityPageComponent,
    EditPackagesComponent,
    ShowCustomerDetailsComponent,
    EditContactDetailsComponent,
    FormComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FlashMessagesModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
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
import { EditComponent } from './components/edit/edit.component';
import { ShowCustomerDetailsComponent } from './components/show-customer-details/show-customer-details.component';
import { EditContactDetailsComponent } from './components/edit-contact-details/edit-contact-details.component';

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
    EditComponent,
    ShowCustomerDetailsComponent,
    EditContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

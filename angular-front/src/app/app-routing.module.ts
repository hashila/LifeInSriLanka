import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DocumentationpageComponent } from './components/documentationpage/documentationpage.component';
import { PackagespageComponent } from './components/packagespage/packagespage.component';
import { CharitypageComponent } from './components/charitypage/charitypage.component';
import { AboutuspageComponent } from './components/aboutuspage/aboutuspage.component';
import { NewpostComponent } from './components/newpost/newpost.component';

import { EditContactDetailsComponent } from './components/edit-contact-details/edit-contact-details.component';
import { ShowCustomerDetailsComponent } from './components/show-customer-details/show-customer-details.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'documentationpage',  component: DocumentationpageComponent },
  { path: 'packagespage', component:  PackagespageComponent },
  { path: 'charitypage', component:  CharitypageComponent },
  { path: 'aboutuspage', component:  AboutuspageComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'editcontact', component: EditContactDetailsComponent },
  { path: 'ShowCustomerDetails', component: ShowCustomerDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-login', component: AdminloginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

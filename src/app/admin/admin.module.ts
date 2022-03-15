import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    RegisterStaffComponent,
    ViewStaffComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

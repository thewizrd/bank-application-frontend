import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  {
    path: 'admin/registerStaff',
    component: RegisterStaffComponent,
  },
  {
    path: 'admin/dashboard',
    component: ViewStaffComponent,
  },
  {
    path: 'admin/viewStaff',
    component: ViewStaffComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

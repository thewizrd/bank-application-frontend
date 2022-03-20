import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavGuard } from '../guards/admin-nav.guard';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  {
    path: 'admin/registerStaff',
    component: RegisterStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
  {
    path: 'admin/dashboard',
    component: ViewStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
  {
    path: 'admin/viewStaff',
    component: ViewStaffComponent,
    canActivate: [AdminNavGuard],
    canLoad: [AdminNavGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

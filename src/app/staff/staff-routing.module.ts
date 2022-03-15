import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnableDisableCustomerComponent } from './enable-disable-customer/enable-disable-customer.component';
import { TransferComponent } from './transfer/transfer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { ApproveBeneficiaryComponent } from './approve-beneficiary/approve-beneficiary.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';

const routes: Routes = [
  { path: 'staff/dashboard', component: DashboardComponent },
  {
    path: 'staff/enable-disable-customer',
    component: EnableDisableCustomerComponent,
  },
  { path: 'staff/transfer', component: TransferComponent },
  { path: 'staff/customer-accounts', component: CustomerAccountsComponent },
  { path: 'staff/approve-beneficiary', component: ApproveBeneficiaryComponent },
  { path: 'staff/approve-account', component: ApproveAccountComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}

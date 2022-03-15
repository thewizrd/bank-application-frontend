import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveAccountComponent } from './approve-account/approve-account.component';
import { ApproveBeneficiaryComponent } from './approve-beneficiary/approve-beneficiary.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnableDisableCustomerComponent } from './enable-disable-customer/enable-disable-customer.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path: 'staff/login',
    component: LoginComponent,
  },
  {
    path: 'staff/approveAccount',
    component: ApproveAccountComponent,
  },
  {
    path: 'staff/approveBeneficiary',
    component: ApproveBeneficiaryComponent,
  },
  {
    path: 'staff/customerAccounts',
    component: CustomerAccountsComponent,
  },
  {
    path: 'staff/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'staff/updateCustomerStatus',
    component: EnableDisableCustomerComponent,
  },
  {
    path: 'staff/transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}

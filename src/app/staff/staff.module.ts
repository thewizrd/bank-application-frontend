import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { ApproveBeneficiaryComponent } from './approve-beneficiary/approve-beneficiary.component';
import { ApproveAccountComponent } from './approve-account/approve-account.component';
import { EnableDisableCustomerComponent } from './enable-disable-customer/enable-disable-customer.component';
import { TransferComponent } from './transfer/transfer.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CustomerAccountsComponent,
    ApproveBeneficiaryComponent,
    ApproveAccountComponent,
    EnableDisableCustomerComponent,
    TransferComponent,
  ],
  imports: [CommonModule, StaffRoutingModule, FormsModule],
  exports: [DashboardComponent],
})
export class StaffModule {}

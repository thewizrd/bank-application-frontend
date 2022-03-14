import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    DashboardComponent,
    CreateAccountComponent,
    AddBeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransferComponent,
    UpdateProfileComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

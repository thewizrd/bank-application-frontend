import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MismatchedComponent } from './mismatched/mismatched.component';

import { RegisterComponent } from './register/register.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: 'customer/login',
    component: LoginComponent,
  },
  {
    path: 'customer/register',
    component: RegisterComponent,
  },
  {
    path: 'customer/updateProfile',
    component: UpdateProfileComponent,
  },
  {
    path: 'customer/accountDetails',
    component: AccountDetailsComponent,
  },
  {
    path: 'customer/addBeneficiary',
    component: AddBeneficiaryComponent,
  },
  {
    path: 'customer/createAccount',
    component: CreateAccountComponent,
  },
  {
    path: 'customer/forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'customer/removeBeneficiary',
    component: RemoveBeneficiaryComponent,
  },
  {
    path: 'customer/transfer',
    component: TransferComponent,
  },
  {
    path: 'customer/updatePassword',
    component: UpdatePasswordComponent,
  },
  {
    path: 'customer/mismatched',
    component: MismatchedComponent,
  },
  {
    path: 'customer/dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from './create-account/create-account.component';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
=======
>>>>>>> 2824daa21e7498a7f64ab93358c682d152c30b45
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MismatchedComponent } from './mismatched/mismatched.component';
import { RegisterComponent } from './register/register.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
<<<<<<< HEAD
=======
import { TransferComponent } from './transfer/transfer.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
>>>>>>> 2824daa21e7498a7f64ab93358c682d152c30b45
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
<<<<<<< HEAD
    path: 'customer/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'customer/dashboard/createAccount',
    component: CreateAccountComponent,
  },
  {
    path: 'customer/dashboard/addBeneficiary',
    component: AddBeneficiaryComponent,
  },
  {
    path: 'customer/dashboard/removeBeneficiary',
    component: RemoveBeneficiaryComponent,
  },
  {
    path: 'customer/dashboard/accountDetails',
    component: AccountDetailsComponent,
  },
  {
    path: 'customer/forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'customer/forgotPassword/mismatched',
=======
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
>>>>>>> 2824daa21e7498a7f64ab93358c682d152c30b45
    component: MismatchedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}

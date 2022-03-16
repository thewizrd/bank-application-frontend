import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordRequest } from 'src/app/models/reset-password-request';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  resetPassword = new ResetPasswordRequest();
  username: any;
  constructor(
    private router: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((data) => {
      this.username = data;
    });
  }

  doSubmit() {
    if (this.resetPassword.confirmPassword != this.resetPassword.password) {
      window.alert('password not match');
      document.getElementById('confirmPassword')?.focus();
      this.resetPassword.confirmPassword = '';
    } else {
      this.customerService
        .updateForgottenPassword(this.username, this.resetPassword)
        .subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
      location.href = 'customer/login';
    }
  }
}

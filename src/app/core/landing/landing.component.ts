import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInRequest } from 'src/app/models/sign-in-request';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  loginForm = new SignInRequest();
  message: string = '';
  errorMsg: string = '';

  constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this._authService.isLoggedIn()) {
      if (this._authService.isAdmin()) {
        this._router.navigate(['/admin/dashboard']);
      } else if (this._authService.isStaff()) {
        this._router.navigate(['/staff/dashboard']);
      } else if (this._authService.isCustomer()) {
        this._router.navigate(['/customer/dashboard']);
      }
    }
  }

  login(): void {
    this._customerService.authCustomer(this.loginForm).subscribe({
      next: (result) => {
        var roles = result.roles;
        if (roles.includes('ROLE_ADMIN')) {
          this._router.navigate(['/admin/dashboard']);
        } else if (roles.includes('ROLE_STAFF')) {
          this._router.navigate(['/staff/dashboard']);
        } else if (roles.includes('ROLE_CUSTOMER')) {
          this._router.navigate(['/customer/dashboard']);
        } else {
          this.errorMsg = 'Invalid role specified';
          this._authService.logout();
        }
      },
      error: (err) => {
        this.errorMsg = err.message;
      },
    });
  }
}

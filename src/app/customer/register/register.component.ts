import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserRequest } from 'src/app/models/create-user-request';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new CreateUserRequest();
  confirmPassword: string = '';

  errorMsg: string = '';
  message: string = '';

  constructor(
    private _router: Router,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  registerCustomer() {
    if (this.registerForm.password !== this.confirmPassword) {
      this.errorMsg = 'Passwords do not match';
    } else {
      this.errorMsg = '';
      this._customerService.registerCustomer(this.registerForm).subscribe({
        next: (result) => {
          alert('Registration successfull');
          this._router.navigate(['/customer/login']);
        },
        error: (err) => {
          this.errorMsg = err.message;
        },
      });
    }
  }
}

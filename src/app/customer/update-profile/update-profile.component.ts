import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCustomerRequest } from 'src/app/models/update-customer-request';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  updateForm = new UpdateCustomerRequest();
  customerID: number | undefined = undefined;

  errorMsg: string = '';
  message: string = '';

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _tokenStorageService: TokenStorageService,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // Get current user ID
    const jwtToken = this._tokenStorageService.getTokenResponse();
    this.customerID = jwtToken?.id;

    if (this.customerID) {
      this._customerService.getCustomerByID(this.customerID).subscribe({
        next: (result) => {
          this.updateForm.updateFromResponse(result);
        },
        error: (err) => {
          this.errorMsg = 'Unable to get customer profile details';
        },
      });
    } else {
      this.errorMsg = 'Unable to get customer profile details';
    }
  }

  updateProfile() {
    if (this.customerID) {
      this._customerService
        .updateCustomerByID(this.customerID, this.updateForm)
        .subscribe({
          next: (result) => {
            alert('Profile updated successfully');
            this._router.navigate(['/customer/dashboard']);
          },
          error: (err) => {
            this.errorMsg = err.message;
          },
        });
    } else {
      this.errorMsg = 'Unable to get customer ID';
    }
  }
}

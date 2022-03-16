import { Component, OnInit } from '@angular/core';
import { AllCustomersResponse } from 'src/app/interfaces/all-customers-response';
import { StaffService } from 'src/app/services/staff.service';
import { UpdateCustomerStatusRequest } from 'src/app/models/update-customer-status-request';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CustomerStatus } from 'src/app/enums/customer-status';

@Component({
  selector: 'app-enable-disable-customer',
  templateUrl: './enable-disable-customer.component.html',
  styleUrls: ['./enable-disable-customer.component.css'],
})
export class EnableDisableCustomerComponent implements OnInit {
  customers: AllCustomersResponse[] = [];

  constructor(
    private _staffService: StaffService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  setEnableStatus(customerId: number): void {
    const request = new UpdateCustomerStatusRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Unable to verify staff.');
    } else {
      request.customerId = customerId;
      request.status = CustomerStatus.ENABLED;
      this._staffService.updateCustomerStatus(request).subscribe({
        next: (result) => {
          window.location.reload();
        },
      });
    }
  }

  setDisableStatus(customerId: number): void {
    const request = new UpdateCustomerStatusRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Unable to verify staff.');
    } else {
      request.customerId = customerId;
      request.status = CustomerStatus.DISABLED;
      this._staffService.updateCustomerStatus(request).subscribe({
        next: (result) => {
          window.location.reload();
        },
      });
    }
  }

  reloadData() {
    this._staffService.getAllCustomers().subscribe({
      next: (result) => {
        this.customers = result;
      },
    });
  }
}

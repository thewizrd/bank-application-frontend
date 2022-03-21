import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { TransferRequest } from 'src/app/models/transfer-request';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { BeneficiaryResponse } from 'src/app/interfaces/beneficiary-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  request: TransferRequest = new TransferRequest();
  accounts: AllAccountsResponse[] = [];
  beneficiaries: BeneficiaryResponse[] = [];
  customerID: number | null = null;

  errorMsg: string = '';

  constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const token = this._tokenStorageService.getTokenResponse();
    if (token) {
      this.customerID = token.id;

      // Set customer ID for initiated by
      this.request.by = this.customerID;

      this.loadAccounts(this.customerID);
      this.loadBeneficiaries(this.customerID);
    } else {
      alert('Unable to verify customer.');
    }
  }

  loadAccounts(customerID: number) {
    this._customerService.getCustomerAccounts(customerID).subscribe({
      next: (result) => {
        this.accounts = result;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  loadBeneficiaries(customerID: number) {
    this._customerService.getBeneficiariesForCustomer(customerID).subscribe({
      next: (result) => {
        this.beneficiaries = result;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  initiateTransfer(): void {
    console.log(this.request);
    if (
      this.request.fromAccNumber &&
      this.request.toAccNumber &&
      this.request.amount &&
      this.request.transactionType
    ) {
      if (this.request.amount <= 0) {
        alert('Amount cannot be zero or less');
      } else if (this.request.fromAccNumber === this.request.toAccNumber) {
        alert('You cannot transfer funds to the same account.');
      } else {
        this._customerService.doTransfer(this.request).subscribe({
          next: (result) => {
            alert('Transfer Successful');
            this._router.navigate(['/customer/accountDetails']);
          },
          error: (err) => {
            console.log(err.message);
            alert(err.message);
          },
        });
      }
    } else {
      this.errorMsg = 'Invalid request';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NonApprovedAccountResponse } from 'src/app/interfaces/non-approved-account-response';
import { StaffService } from 'src/app/services/staff.service';
import { ApprovedAccountRequest } from 'src/app/models/approved-account-request';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-approve-account',
  templateUrl: './approve-account.component.html',
  styleUrls: ['./approve-account.component.css'],
})
export class ApproveAccountComponent implements OnInit {
  accounts: NonApprovedAccountResponse[] = [];

  constructor(
    private _staffService: StaffService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  setApprovedStatus(accountNumber: number): void {
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Unable to get staff username.');
    } else {
      const request = new ApprovedAccountRequest();
      request.accountNumber = accountNumber;
      request.approved = 'yes';
      request.staffUserName = token.username;

      this._staffService.approveCustomerAccounts(request).subscribe({
        next: (result) => {
          window.location.reload();
        },
      });
    }
  }

  reloadData() {
    this._staffService.getNonApprovedAccounts().subscribe({
      next: (result) => {
        this.accounts = result;
      },
    });
  }
}

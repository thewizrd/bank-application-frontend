import { Component, OnInit } from '@angular/core';
import { AccountLookupResponse } from 'src/app/interfaces/account-lookup-response';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css'],
})
export class CustomerAccountsComponent implements OnInit {
  accountNumber: any;
  customerName: any;
  accountBalance: any;

  accounts!: AccountLookupResponse;

  constructor(private _staffService: StaffService) {}

  viewAccounts(): void {
    this._staffService.getAccountByAccountNumber(this.accountNumber).subscribe({
      next: (result) => {
        this.accounts = result;
        this.customerName = this.accounts.firstName
          .concat(' ')
          .concat(this.accounts.lastName);
        this.accountBalance = this.accounts.balance;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {}

  reloadTable() {}
}

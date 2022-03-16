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
  accountNumberLabel: any;
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
        this.accountNumberLabel = this.accounts.accountNumber;
      },
      error: (err) => {
        this.accounts = {} as AccountLookupResponse;
        this.customerName = '';
        this.accountBalance = '';
        this.accountNumberLabel = '';
        console.log(err.message);
        if (err.message === 'account not found') {
          alert('Sorry, the account you are looking for does not exist.');
        } else {
          alert(
            'Invalid input. Please enter a whole number in the account number field.'
          );
        }
      },
    });
  }

  ngOnInit(): void {}

  reloadTable() {}
}

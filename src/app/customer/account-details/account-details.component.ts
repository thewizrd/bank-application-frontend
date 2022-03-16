import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { AccountDetailsResponse } from 'src/app/interfaces/account-details-response';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { TransactionLookupResponse } from 'src/app/interfaces/transaction-lookup-response';
import { TransactionsResponse } from 'src/app/interfaces/transactions-response';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  customerId: any;
  accountDetails: AccountDetailsResponse | null = null;
  transaction: TransactionsResponse[] = [];
  accounts: AllAccountsResponse[] = [];
  accountNum: any;

  constructor(
    private customerService: CustomerService,
    public router: ActivatedRoute,
    private _tokenService: TokenStorageService
  ) {}

  ngOnInit() {
    const jwtToken = this._tokenService.getTokenResponse();
    this.customerId = jwtToken?.id;

    this.router.queryParams.subscribe((data) => {
      this.accountNum = data['id'];
      console.log('accountNUm: ' + this.accountNum);

      if (this.accountNum) {
        this.loadAccountInfo(this.accountNum);
      }
    });

    this.loadAllAccounts();
  }

  loadAllAccounts(): void {
    this.customerService
      .getCustomerAccounts(this.customerId)
      .subscribe((accounts) => {
        this.accounts = accounts;

        console.log('accountNUm: ' + this.accountNum);
        console.log('accounts: ' + accounts);
        console.log('accountDetails: ' + this.accountDetails);

        if (!this.accountNum && this.accounts.length > 0) {
          this.accountNum = this.accounts[0].accountNumber;
        }
        if (!this.accountDetails) {
          this.loadAccountInfo(this.accountNum);
        }
      });
  }

  loadAccountInfo(accountNum: number) {
    this.accountNum = accountNum;

    this.customerService
      .getCustomerAccountByID(this.customerId, accountNum)
      .subscribe((data) => {
        console.log(data);
        this.accountDetails = data;
        this.transaction = data.transaction;
      });
  }
}

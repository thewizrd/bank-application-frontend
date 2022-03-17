import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { AccountDetailsResponse } from 'src/app/interfaces/account-details-response';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { TransactionLookupResponse } from 'src/app/interfaces/transaction-lookup-response';
import { TransactionsResponse } from 'src/app/interfaces/transactions-response';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  customerId: any;
  accountDetails = {} as AccountDetailsResponse;
  transaction: TransactionsResponse[] = [];
  accounts: AllAccountsResponse[] = [];
  accountNum: any;
  accountLength: number = 0;

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
      console.log('accountNUm' + this.accountNum);
      this.getTransactions();
    });

    this.getAccounts();
  }

  changeAccountNumber(value: any) {
    console.log('accounNum: ' + value);
    this.accountNum = value;
    this.getTransactions();
  }

  getAccounts() {
    this.customerService
      .getCustomerAccounts(this.customerId)
      .subscribe((accounts) => {
        this.accounts = accounts;

        if (!this.accountNum && accounts.length > 0) {
          this.changeAccountNumber(accounts[0].accountNumber);
        }
      });
  }

  getTransactions() {
    this.customerService
      .getCustomerAccountByID(this.customerId, this.accountNum)
      .subscribe((data) => {
        console.log(data);
        this.accountDetails = data;
        this.transaction = data.transaction;
      });
  }
  // downloadFile(data: any, type: number, name: string) {
  //   const blob = new Blob([data], { type: 'text/xlsx' });
  //   const dataURL = window.URL.createObjectURL(blob);
  //   if (window.navigator) {
  //   }
  //   const a = document.createElement('a');
  //   a.href = dataURL;
  //   a.download = 'export file.xlsx';
  //   a.click();
  // }

  // download() {
  //   this.transaction.forEach((data) => this.downloadFile(data, 2, 'file'));
  // }
  download() {
    const blob = new Blob([document.getElementById('exportable')!.innerHTML], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, 'accountStatment.xls');
  }
}

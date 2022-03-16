import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  customerId: any;
  accounts: AllAccountsResponse[] = [];
  accountsV: AllAccountsResponse[] = [];
  errorMsg: string = '';

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private _tokenService: TokenStorageService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const jwtToken = this._tokenService.getTokenResponse();
    this.customerId = jwtToken?.id;

    this.customerService
      .getCustomerAccounts(this.customerId)
      .subscribe((accountss) => {
        this.accountsV = accountss;
        if (this.accountsV.length > 0) {
          this.accounts = this.accountsV;
        } else {
          this.errorMsg =
            'There No Account Available, please create a new account';
        }
      });
  }

  goDetails(accountNum: number) {
    console.log(accountNum);
    location.href = 'customer/accountDetails?id=' + accountNum;
  }
}

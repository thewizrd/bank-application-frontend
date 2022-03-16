import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/enums/account-type';
import { CreateAccountRequest } from 'src/app/models/create-account-request';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  customerId: any;
  account: CreateAccountRequest = new CreateAccountRequest();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private _tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const jwtToken = this._tokenService.getTokenResponse();
    this.customerId = jwtToken?.id;
  }

  newAccount(): void {
    this.submitted = false;
    this.account = new CreateAccountRequest();
  }
  onSubmit() {
    this.submitted = true;
    this.create();
  }
  create() {
    if (
      this.account.accountBalance! < 0 ||
      this.account.accountBalance == null ||
      this.account.accountBalance! == 0
    ) {
      document.getElementById('initialDeposit')?.focus();
      window.alert('initialDeposit must be greater than zero!');
    } else {
      this.customerService
        .createAccount(this.customerId, this.account)
        .subscribe(
          (data) => console.log(data),
          (error) => console.log(error)
        );
      window.alert('Create account success!');
      this.gotoList();
    }
  }
  public get accountType(): typeof AccountType {
    return AccountType;
  }

  gotoList() {
    // Forces a reload
    location.href = '/customer/dashboard';
  }
}

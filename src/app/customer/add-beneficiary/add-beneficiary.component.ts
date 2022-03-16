import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountType } from 'src/app/enums/account-type';
import { AddBeneficiaryRequest } from 'src/app/models/add-beneficiary-request';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css'],
})
export class AddBeneficiaryComponent implements OnInit {
  account: AddBeneficiaryRequest = new AddBeneficiaryRequest();
  customerId: any;
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

  public get accountType(): typeof AccountType {
    return AccountType;
  }
  onSubmit() {
    this.submitted = true;
    this.create();
  }

  create() {
    this.customerService
      .addBeneficiaryToCustomer(this.customerId, this.account)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['customer/dashboard']);
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('comfirmAccount')
  comfirmAccount: ElementRef | undefined;

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
    if (
      this.account.accountNumber == null ||
      this.comfirmAccount?.nativeElement.value == '' ||
      this.account.accountNumber != this.comfirmAccount?.nativeElement.value
    ) {
      console.log(
        this.account.accountNumber +
          ',' +
          this.comfirmAccount?.nativeElement.value
      );
      window.alert('account number must be match');
      document.getElementById('comfirmAccount')?.focus();
    } else {
      console.log(
        this.account.accountNumber +
          ',' +
          this.comfirmAccount?.nativeElement.value
      );
      this.customerService
        .addBeneficiaryToCustomer(this.customerId, this.account)
        .subscribe(
          (data) => {
            window.alert('Add beneficiary successfully');
            this.gotoList();
            console.log(data);
          },
          (error) => {
            window.alert('Add beneficiary failed');
            console.log(error);
          }
        );
    }
  }

  gotoList() {
    this.router.navigate(['customer/dashboard']);
  }
}

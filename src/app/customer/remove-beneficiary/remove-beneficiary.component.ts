import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaryStatus } from 'src/app/enums/beneficiary-status';
import { BeneficiaryResponse } from 'src/app/interfaces/beneficiary-response';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css'],
})
export class RemoveBeneficiaryComponent implements OnInit {
  customerId: any;
  submitted = false;
  beneficiaries: BeneficiaryResponse[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private _tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const jwtToken = this._tokenService.getTokenResponse();
    this.customerId = jwtToken?.id;
    this.getBeneficiaries();
  }

  deleteBeneficiary(beneficiaryId: number) {
    this.customerService
      .deleteBeneficiaryFromCustomer(this.customerId, beneficiaryId)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    this.getBeneficiaries();
  }
  getBeneficiaries() {
    this.customerService
      .getBeneficiariesForCustomer(this.customerId)
      .subscribe((data) => {
        this.beneficiaries = data;
      });
  }

  public get beneficiariesStatus(): typeof BeneficiaryStatus {
    return BeneficiaryStatus;
  }
}

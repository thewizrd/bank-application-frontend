import { Component, OnInit } from '@angular/core';
import { NonApprovedBeneficiaryResponse } from 'src/app/interfaces/non-approved-beneficiary-response';
import { StaffService } from 'src/app/services/staff.service';
import { ApproveBeneficiaryRequest } from 'src/app/models/approve-beneficiary-request';

@Component({
  selector: 'app-approve-beneficiary',
  templateUrl: './approve-beneficiary.component.html',
  styleUrls: ['./approve-beneficiary.component.css'],
})
export class ApproveBeneficiaryComponent implements OnInit {
  beneficiaries: NonApprovedBeneficiaryResponse[] = [];

  constructor(private _staffService: StaffService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  setApprovedStatus(fromCustomer: number, beneficiaryAccountNo: number): void {
    const request = new ApproveBeneficiaryRequest();
    request.customerId = fromCustomer;
    request.beneficiaryAccountNumber = beneficiaryAccountNo;
    request.isApproved = 'yes';
    this._staffService.approveBeneficiary(request).subscribe({
      next: (result) => {
        window.location.reload();
      },
    });
  }

  reloadData() {
    this._staffService.getNonApprovedBeneficiaries().subscribe({
      next: (result) => {
        this.beneficiaries = result;
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css'],
})
export class CustomerAccountsComponent implements OnInit {
  accounts: AllAccountsResponse[] = [];

  constructor(private _staffService: StaffService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {}
}

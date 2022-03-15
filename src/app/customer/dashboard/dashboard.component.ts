import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllAccountsResponse } from 'src/app/interfaces/all-accounts-response';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  accounts: Observable<AllAccountsResponse[]>;

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    getallAccounts(customerId: number);
  }

  getallAccounts(customerId: number) {
    this.accounts= this.customerService.getAllAccounts(customerId).subscribe()
  }
}

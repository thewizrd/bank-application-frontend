import { Component, OnInit } from '@angular/core';
import { CreateAccountRequest } from 'src/app/models/create-account-request';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account: CreateAccountRequest = new CreateAccountRequest();
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  newAccount(): void {
    this.submitted = false;
    this.account = new CreateAccountRequest();
  }

  save() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css'],
})
export class RegisterStaffComponent implements OnInit {
  errorMsg: string = '';
  message: string = '';

  constructor() {}

  ngOnInit(): void {}
}

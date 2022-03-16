import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  customerId: any;
  customerName: any;

  question: any;
  answer: any;
  correctAnswer: any;
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService
      .getCustomerSecurityQandA(this.customerName)
      .subscribe((data) => {
        this.question = data.securityQuestion;
        this.correctAnswer = data.securityAnswer;
      });
  }

  // to check the answer is correct or not
  onSubmit() {
    if (this.answer != this.correctAnswer) {
      location.href = 'customer/mismatched';
    } else {
      location.href =
        'customer/customer/updatePassword?username=' + this.customerName;
    }
  }
}

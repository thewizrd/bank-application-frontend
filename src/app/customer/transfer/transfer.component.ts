import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { TransferRequest } from 'src/app/models/transfer-request';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  fromAccNumber: any;
  toAccNumber: any;
  amount: any;
  reason: any;

  constructor(
    private _customerService: CustomerService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  initiateTransfer(): void {
    if (this.fromAccNumber === this.toAccNumber) {
      alert('You cannot transfer funds to the same account.');
    } else {
      console.log('initiating transfer');
      const request = new TransferRequest();
      const token = this._tokenStorageService.getTokenResponse();
      if (token === null) {
        console.log('Unable to verify staff member.');
      } else {
        request.amount = this.amount;
        request.by = token.id;
        request.fromAccNumber = this.fromAccNumber;
        request.reason = this.reason;
        request.toAccNumber = this.toAccNumber;
        this._customerService.doTransfer(request).subscribe({
          next: (result) => {
            alert('Transfer Successful');
          },
          error: (err) => {
            alert(err.message);
          },
        });
      }
    }
  }
}

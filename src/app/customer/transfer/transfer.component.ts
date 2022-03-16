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
  constructor(
    private _customerService: CustomerService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  initiateTransfer(): void {
    const request = new TransferRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Unable to verify customer.');
    } else {
      request.by = token.id;
      request.fromAccNumber = parseInt(
        (<HTMLInputElement>document.getElementById('fromAccNumber')).value
      );
      request.reason = (<HTMLInputElement>(
        document.getElementById('reason')
      )).value;
      request.toAccNumber = parseInt(
        (<HTMLInputElement>document.getElementById('toAccNumber')).value
      );
      this._customerService.doTransfer(request).subscribe({
        next: (result) => {
          alert('Transfer Successful');
        },
      });
    }
  }
}

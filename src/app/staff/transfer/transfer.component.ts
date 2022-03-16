import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { TransferAmountRequest } from 'src/app/models/transfer-amount-request';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  constructor(
    private _staffService: StaffService,
    private _tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  initiateTransfer(): void {
    const request = new TransferAmountRequest();
    const token = this._tokenStorageService.getTokenResponse();
    if (token === null) {
      console.log('Unable to verify staff member.');
    } else {
      request.amount = parseFloat(
        (<HTMLInputElement>document.getElementById('amount')).value
      );
      request.byStaff = token.username;
      request.fromAccNumber = parseInt(
        (<HTMLInputElement>document.getElementById('fromAccNumber')).value
      );
      request.reason = (<HTMLInputElement>(
        document.getElementById('reason')
      )).value;
      request.toAccNumber = parseInt(
        (<HTMLInputElement>document.getElementById('toAccNumber')).value
      );
      this._staffService.doTransfer(request).subscribe({
        next: (result) => {
          alert('Transfer Successful');
        },
      });
    }
  }
}

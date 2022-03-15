import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AccountLookupResponse } from '../interfaces/account-lookup-response';
import { AllCustomersResponse } from '../interfaces/all-customers-response';
import { ApprovedAccountResponse } from '../interfaces/approved-account-response';
import { CustomerResponseFromStaff } from '../interfaces/customer-response-from-staff';
import { JwtResponse } from '../interfaces/jwt-response';
import { NonApprovedAccountResponse } from '../interfaces/non-approved-account-response';
import { NonApprovedBeneficiaryResponse } from '../interfaces/non-approved-beneficiary-response';
import { StaffTransactionResponse } from '../interfaces/staff-transaction-response';
import { ApproveBeneficiaryRequest } from '../models/approve-beneficiary-request';
import { ApprovedAccountRequest } from '../models/approved-account-request';
import { SignInRequest } from '../models/sign-in-request';
import { TransferAmountRequest } from '../models/transfer-amount-request';
import { UpdateCustomerStatusRequest } from '../models/update-customer-status-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private baseUrl = 'http://localhost:9010/api/staff/';

  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient
  ) {}

  authStaff(request: SignInRequest): Observable<JwtResponse> {
    return this._httpClient
      .post<JwtResponse>(this.baseUrl + 'authenticate', request)
      .pipe(tap((value) => this._authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  getAccountByAccountNumber(
    accountNo: number
  ): Observable<AccountLookupResponse> {
    return this._httpClient
      .get<AccountLookupResponse>(this.baseUrl + 'account/' + accountNo)
      .pipe(catchError(this.errorHandler));
  }

  getNonApprovedBeneficiaries(): Observable<NonApprovedBeneficiaryResponse[]> {
    return this._httpClient
      .get<NonApprovedBeneficiaryResponse[]>(this.baseUrl + 'beneficiary')
      .pipe(catchError(this.errorHandler));
  }

  approveBeneficiary(
    request: ApproveBeneficiaryRequest
  ): Observable<ApproveBeneficiaryRequest> {
    return this._httpClient
      .put<ApproveBeneficiaryRequest>(this.baseUrl + 'beneficiary', request)
      .pipe(catchError(this.errorHandler));
  }

  getNonApprovedAccounts(): Observable<NonApprovedAccountResponse[]> {
    return this._httpClient
      .get<NonApprovedAccountResponse[]>(this.baseUrl + 'accounts/approve')
      .pipe(catchError(this.errorHandler));
  }

  approveCustomerAccounts(
    request: ApprovedAccountRequest
  ): Observable<ApprovedAccountResponse> {
    return this._httpClient
      .put<ApprovedAccountResponse>(this.baseUrl + 'accounts/approve', request)
      .pipe(catchError(this.errorHandler));
  }

  getAllCustomers(): Observable<AllCustomersResponse[]> {
    return this._httpClient
      .get<AllCustomersResponse[]>(this.baseUrl + 'customer')
      .pipe(catchError(this.errorHandler));
  }

  updateCustomerStatus(
    request: UpdateCustomerStatusRequest
  ): Observable<CustomerResponseFromStaff> {
    return this._httpClient
      .put<CustomerResponseFromStaff>(this.baseUrl + 'customer', request)
      .pipe(catchError(this.errorHandler));
  }

  getCustomerByID(customerID: number): Observable<CustomerResponseFromStaff> {
    return this._httpClient
      .get<CustomerResponseFromStaff>(this.baseUrl + 'customer/' + customerID)
      .pipe(catchError(this.errorHandler));
  }

  doTransfer(
    request: TransferAmountRequest
  ): Observable<StaffTransactionResponse> {
    return this._httpClient
      .put<StaffTransactionResponse>(this.baseUrl + 'transfer', request)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(() => new Error(error.error.message));
  }
}

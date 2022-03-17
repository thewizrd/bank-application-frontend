import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AccountDetailsResponse } from '../interfaces/account-details-response';
import { AddBeneficiaryResponse } from '../interfaces/add-beneficiary-response';
import { AllAccountsResponse } from '../interfaces/all-accounts-response';
import { ApiMessage } from '../interfaces/api-message';
import { BeneficiaryResponse } from '../interfaces/beneficiary-response';
import { CustomerResponse } from '../interfaces/customer-response';
import { GetCustomerQandAResponse } from '../interfaces/get-customer-qand-aresponse';
import { JwtResponse } from '../interfaces/jwt-response';
import { RegisterCustomerResponse } from '../interfaces/register-customer-response';
import { StaffApproveAccountResponse } from '../interfaces/staff-approve-account-response';
import { TransferResponse } from '../interfaces/transfer-response';
import { AddBeneficiaryRequest } from '../models/add-beneficiary-request';
import { ApproveAccountRequest } from '../models/approve-account-request';
import { CreateAccountRequest } from '../models/create-account-request';
import { CreateUserRequest } from '../models/create-user-request';
import { ResetPasswordRequest } from '../models/reset-password-request';
import { SignInRequest } from '../models/sign-in-request';
import { TransferRequest } from '../models/transfer-request';
import { UpdateCustomerRequest } from '../models/update-customer-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:9010/api/customer/';

  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient
  ) {}

  registerCustomer(
    request: CreateUserRequest
  ): Observable<RegisterCustomerResponse> {
    return this._httpClient
      .post<RegisterCustomerResponse>(this.baseUrl + 'register', request)
      .pipe(catchError(this.errorHandler));
  }

  authCustomer(request: SignInRequest): Observable<JwtResponse> {
    return this._httpClient
      .post<JwtResponse>(this.baseUrl + 'authenticate', request)
      .pipe(tap((value) => this._authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  registerAccount(
    customerID: number,
    request: CreateAccountRequest
  ): Observable<RegisterCustomerResponse> {
    return this._httpClient
      .post<RegisterCustomerResponse>(
        this.baseUrl + customerID + '/account',
        request
      )
      .pipe(catchError(this.errorHandler));
  }

  approveCustomerAccount(
    customerID: number,
    accountNumber: number,
    request: ApproveAccountRequest
  ): Observable<StaffApproveAccountResponse> {
    return this._httpClient
      .put<StaffApproveAccountResponse>(
        this.baseUrl + customerID + '/account/' + accountNumber,
        request
      )
      .pipe(catchError(this.errorHandler));
  }

  getCustomerAccounts(customerID: number): Observable<AllAccountsResponse[]> {
    return this._httpClient
      .get<AllAccountsResponse[]>(this.baseUrl + customerID + '/account')
      .pipe(catchError(this.errorHandler));
  }

  getCustomerByID(customerID: number): Observable<CustomerResponse> {
    return this._httpClient
      .get<CustomerResponse>(this.baseUrl + customerID)
      .pipe(catchError(this.errorHandler));
  }

  updateCustomerByID(
    customerID: number,
    request: UpdateCustomerRequest
  ): Observable<CustomerResponse> {
    return this._httpClient
      .put<CustomerResponse>(this.baseUrl + customerID, request)
      .pipe(catchError(this.errorHandler));
  }

  getCustomerAccountByID(
    customerID: number,
    accountID: number
  ): Observable<AccountDetailsResponse> {
    return this._httpClient
      .get<AccountDetailsResponse>(
        this.baseUrl + customerID + '/account/' + accountID
      )
      .pipe(catchError(this.errorHandler));
  }

  addBeneficiaryToCustomer(
    customerID: number,
    request: AddBeneficiaryRequest
  ): Observable<AddBeneficiaryResponse> {
    return this._httpClient
      .post<AddBeneficiaryResponse>(
        this.baseUrl + customerID + '/beneficiary',
        request
      )
      .pipe(catchError(this.errorHandler));
  }

  getBeneficiariesForCustomer(
    customerID: number
  ): Observable<BeneficiaryResponse[]> {
    return this._httpClient
      .get<BeneficiaryResponse[]>(this.baseUrl + customerID + '/beneficiary')
      .pipe(catchError(this.errorHandler));
  }

  deleteBeneficiaryFromCustomer(
    customerID: number,
    beneficiaryID: number
  ): Observable<AddBeneficiaryResponse> {
    return this._httpClient
      .delete<AddBeneficiaryResponse>(
        this.baseUrl + customerID + '/beneficiary/' + beneficiaryID
      )
      .pipe(catchError(this.errorHandler));
  }

  doTransfer(request: TransferRequest): Observable<TransferResponse> {
    return this._httpClient
      .put<TransferResponse>(this.baseUrl + 'transfer', request)
      .pipe(catchError(this.errorHandler));
  }

  getCustomerSecurityQandA(
    username: string
  ): Observable<GetCustomerQandAResponse> {
    return this._httpClient
      .get<GetCustomerQandAResponse>(
        this.baseUrl + username + '/forgot/question/answer'
      )
      .pipe(catchError(this.errorHandler));
  }

  updateForgottenPassword(
    username: string,
    request: ResetPasswordRequest
  ): Observable<ApiMessage> {
    return this._httpClient
      .put<ApiMessage>(this.baseUrl + username + '/forgot', request)
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

  //create account by customer

  createAccount(
    customerId: number,
    accountRequest: CreateAccountRequest
  ): Observable<RegisterCustomerResponse> {
    return this._httpClient
      .post<RegisterCustomerResponse>(
        `${this.baseUrl}${customerId}/account`,
        accountRequest
      )
      .pipe(catchError(this.errorHandler));
  }
}

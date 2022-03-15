import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = 'http://localhost:9091/api/customer';
  constructor(private _http: HttpClient) {}

  //create account by customer
  //??how to get response
  createAccount(customerId: number, accountRequest: object): Observable<any> {
    return this._http.post(
      `${this.baseUrl}+"/"+${customerId}+"/account"`,
      accountRequest
    );
  }
  //get all acounts by customer
  getAllAccounts(customerId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}+"/"+${customerId}+"/account"`);
  }
  //Add beneficiary
  addBeneficiary(
    customerId: number,
    beneficiaryRequest: object
  ): Observable<any> {
    return this._http.post(
      `${this.baseUrl}+"/"+${customerId}+"/beneficiary"`,
      beneficiaryRequest
    );
  }
  //Remove beneficiary
  removeBeneficiary(
    customerId: number,
    beneficiaryId: number
  ): Observable<any> {
    return this._http.delete(
      `${this.baseUrl}+"/"+${customerId}+"/beneficiary/"+${beneficiaryId}`,
      {
        responseType: `json`,
      }
    );
  }

  //specified account details,include transaction details
  getAlltransactions(customerId: number, accountId: number): Observable<any> {
    return this._http.get(
      `${this.baseUrl}+"/"+${customerId}+"/account/"+${accountId}`
    );
  }

  //update password
  updatePassword(username: string, value: any): Observable<any> {
    return this._http.put(`${this.baseUrl}+${username}+"/forgot"`, value);
  }

  //Forgot Password, get security question and answer
  getSecurityQuestion(username: string): Observable<any> {
    return this._http.get(
      `${this.baseUrl}+${username}+"/forgot/question/answer"`
    );
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { JwtResponse } from '../interfaces/jwt-response';
import { StaffRespose } from '../interfaces/staff-respose';
import { CreateStaffRequest } from '../models/create-staff-request';
import { SignInRequest } from '../models/sign-in-request';
import { UpdateStaffRequest } from '../models/update-staff-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:9010/api/admin/';

  constructor(
    private _authService: AuthService,
    private _httpClient: HttpClient
  ) {}

  authAdmin(request: SignInRequest): Observable<JwtResponse> {
    return this._httpClient
      .post<JwtResponse>(this.baseUrl + 'authenticate', request)
      .pipe(tap((value) => this._authService.setSession(value)))
      .pipe(catchError(this.errorHandler));
  }

  createStaff(request: CreateStaffRequest): Observable<StaffRespose> {
    return this._httpClient
      .post<StaffRespose>(this.baseUrl + 'staff', request)
      .pipe(catchError(this.errorHandler));
  }

  getAllStaff(): Observable<StaffRespose[]> {
    return this._httpClient
      .get<StaffRespose[]>(this.baseUrl + 'staff')
      .pipe(catchError(this.errorHandler));
  }

  updateStaffStatus(request: UpdateStaffRequest): Observable<StaffRespose> {
    return this._httpClient
      .put<StaffRespose>(this.baseUrl + 'staff', request)
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

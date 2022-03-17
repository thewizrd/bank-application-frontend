import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  isStaff: boolean = false;
  isCustomer: boolean = false;
  username: string | null = null;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loggedIn = this._authService.isLoggedIn();
    this.isAdmin = this._authService.isAdmin();
    this.isStaff = this._authService.isStaff();
    this.isCustomer = this._authService.isCustomer();

    this._authService.getUserDetails().subscribe((jwtToken) => {
      if (jwtToken == null) {
        this.loggedIn = false;
        this.username = '';
        this.isAdmin = false;
        this.isStaff = false;
        this.isCustomer = false;
      } else {
        this.loggedIn = true;
        this.username = jwtToken.username;
        this.isAdmin = jwtToken.roles.includes('ROLE_ADMIN');
        this.isStaff = jwtToken.roles.includes('ROLE_STAFF');
        this.isCustomer = jwtToken.roles.includes('ROLE_CUSTOMER');
      }

      this.ref.detectChanges();
    });
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/']);
  }
}

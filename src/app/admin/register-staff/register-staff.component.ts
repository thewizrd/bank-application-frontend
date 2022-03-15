import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateStaffRequest } from 'src/app/models/create-staff-request';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css'],
})
export class RegisterStaffComponent implements OnInit {
  registerForm = new CreateStaffRequest();
  confirmPassword: string = '';

  errorMsg: string = '';
  message: string = '';

  constructor(private _router: Router, private _adminService: AdminService) {}

  ngOnInit(): void {}

  registerStaff() {
    if (this.registerForm.password !== this.confirmPassword) {
      this.errorMsg = 'Passwords do not match';
    } else {
      this.errorMsg = '';
      this._adminService.createStaff(this.registerForm).subscribe({
        next: (result) => {
          alert('Staff added successfully');
          this._router.navigate(['/admin/dashboard']);
        },
      });
    }
  }
}

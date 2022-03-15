import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  userEmail: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  logout(): void {}
}

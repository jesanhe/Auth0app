import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService) {
    console.log(auth.isAuthenticated());
  }

  ngOnInit() {}

  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }
}

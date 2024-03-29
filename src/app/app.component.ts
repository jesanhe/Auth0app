import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'authapp';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    // if (this.auth.isAuthenticated) {
    //   this.auth.renewTokens();
    // }
  }
}

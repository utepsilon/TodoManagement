import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user_login_data: Boolean = false;

  logout() {
    this.HardcodedAuthService.logout();
    this.HardcodedAuthService.IsUserLoggedIn();
    this.router.navigate(['login']);



  }

  constructor(public HardcodedAuthService: HardcodedAuthService, public router: Router) {

  }

  ngOnInit() {
    // this.user_login_data= 

  }

}

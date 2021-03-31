import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user_login_data :Boolean=false;

  constructor(public HardcodedAuthService:HardcodedAuthService) {

   }

  ngOnInit() {
    this.user_login_data= this.HardcodedAuthService.IsUserLoggedIn();
  }

}

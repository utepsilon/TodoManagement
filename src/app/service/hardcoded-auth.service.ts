import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

    Authenticate(username,password) {
      // console.log('before'+this.IsUserLoggedIn());
      if (username=="utkarsh" && password=="123456")
    {
      sessionStorage.setItem('authenticatedUser',username);
      // console.log('before'+this.IsUserLoggedIn());
      return true;
    }
    else{
      return false;
    }
    
  

    }

    IsUserLoggedIn(){
     let user= sessionStorage.getItem('authenticatedUser')
     return !(user===null)
    }
  }


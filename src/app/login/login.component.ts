import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username :string=""
  password :string=""
  login_fun()
  { 
   
    // console.log(this.username)
    // console.log(this.password)
    if (this.username=="utkarsh" && this.password=="123456")
    {
      this.router.navigate(['welcome',this.username])
    }
    else{
      alert("Incorrect passoword or username")
    }
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

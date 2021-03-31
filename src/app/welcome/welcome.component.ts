import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username1:string =''
  fun() {
    this.router.navigate(['Todos']);
    
  }
  
  constructor(private route :ActivatedRoute,public router:Router) {
  
   }

  ngOnInit() {

    this.username1 = this.route.snapshot.params['name1'];
    
  }

}

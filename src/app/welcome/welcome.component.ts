import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';
import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username1: string = ''
  welcomeMsg: any=''
  fun() {
    this.router.navigate(['Todos']);

  }
  getWelcome(){
    console.log(this.WelcomedataService.executeTestSerivice().subscribe());
    this.WelcomedataService.executeTestSerivice().subscribe(Response =>this.handleresponse(Response));
    

  }
//  viewmsg(){
//    return true;

//  }
  handleresponse(response){
  this.welcomeMsg=response;
  

  }

  constructor(
    private route: ActivatedRoute, 
    public router: Router, 
    public WelcomedataService:WelcomedataService) {

  }

  ngOnInit() {

    this.username1 = this.route.snapshot.params['name1'];
    

  }

}

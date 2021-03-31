import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export class todo{
  constructor(public id: number, public description:string, public status:boolean,public targetdate:Date){

  }
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

todos =[new todo(1,"jogging at 8",false,new Date()),
        new todo(2,"todo2",true,new Date()),
        new todo(3,"todo3",false,new Date),
        new todo(4,"todo4",false,new Date),
        new todo(5,"todo5",false,new Date),
        new todo(6,"todo6",false,new Date),
        new todo(7,"todo8",false,new Date),
        new todo(8,"todo8",false,new Date),
        new todo(9,"todo9",false,new Date)]
        


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoDataService } from '../service/data/todo-data.service';

export class todo {
  
  constructor(public id: number,
              public status: boolean, 
              public todo_description: string,
              public todtargetdate: string,
              public uniqueid: string) {

  }
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Todos1: todo[];
  


  constructor(public TodoServ: TodoDataService) { }

  ngOnInit() {
    this.TodoServ.RetriveAllTodos().subscribe(
      response => {
        this.Todos1 = response;
        console.log(this.Todos1)
      }

    );


  }

}

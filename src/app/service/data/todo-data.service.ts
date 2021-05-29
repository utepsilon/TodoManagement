import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo, TodoListComponent } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  RetriveAllTodos(){
    return this.http.get<todo[]>('http://localhost:8080/getuserdata/Todos');
  }
}

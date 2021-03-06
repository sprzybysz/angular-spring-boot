import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public isDone: boolean,
    public date: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Golang', false, new Date()),
    new Todo(2, 'Learn Java', true, new Date())
  ]
  constructor() { }

  ngOnInit() {
  }

}

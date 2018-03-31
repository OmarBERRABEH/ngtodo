import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TodoService } from './todo.service';
import { Todo } from '../model';


@Component({
  selector: 'app-todo-list',
  templateUrl: 'todos.list.component.html'
})
export class TodosListComponent {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.get();
  }

  todoChange(todo): void {
    this.todoService.update(todo);
  }

  removeTodo(todo): void {
    this.todoService.remove(todo);
  }
}

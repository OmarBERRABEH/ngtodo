import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoService } from './todo.service';
import { Todo } from '../model';

@Component({
  selector: 'app-todo-container',
  templateUrl: 'todo.container.component.html'
})
export class TodoContainerComponent {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.get();
  }

  toggleStatusAll(checked): void {
    this.todoService.toggleStatusAll(checked);
  }
}

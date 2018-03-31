import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: 'todo.filter.component.html'
})
export class TodoFilterComponent {
  currentFilter = 'all';
  constructor(private todoService: TodoService) {}

  filter(e, status): void {
    e.preventDefault();
    this.currentFilter =  status;
    this.todoService.filter(status);
  }
}

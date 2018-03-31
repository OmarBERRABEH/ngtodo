import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { TodoService } from './todo.service';
import { Todo } from '../model';


@Component({
  selector: 'app-todo-footer',
  templateUrl: 'todo.footer.component.html'
})
export class TodoFooterComponent {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {
    this.todos$ =  this.todoService.get();
  }


  removeAll() {
    this.todoService.removeAll();
  }
}

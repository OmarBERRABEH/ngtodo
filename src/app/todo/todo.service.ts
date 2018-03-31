import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model';

@Injectable()
export class TodoService {
  _index = 0;
  currentFilter = 'all';
  todos = [];
  todos$: BehaviorSubject<Array<Todo>>;

  constructor() {
    this.todos$ = new BehaviorSubject<Array<Todo>>([]);
  }

  get(): Observable<Array<Todo>> {
    return this.todos$.asObservable();
  }

  add(todo: Todo): void {
      todo.index = this._index++;
      todo.status = 'active';
      this.todos = [...this.todos, todo];
      this.filter(this.currentFilter);
  }



  update(currentTodo): void {
   const todoFiltred  = this.todos.find(todo => todo.index ===  currentTodo.index);
   const index = this.index(todoFiltred);
    if (index >= 0) {
        this.todos[index] =  {...currentTodo};
        this.filter(this.currentFilter);
    }
  }

  remove(todo: Todo): void {
    const index =  this.index(todo);
    this.todos.splice(index, 1);
    this.filter(this.currentFilter);
  }

  removeAll() {
    this.todos = [];
    this.filter(this.currentFilter);
  }

  filter(status): void {
    let todos = null;
    this.currentFilter = status;
    if (status !== 'all') {
      todos = this.todos.filter(todo => {
       return todo.status === status;
      });
    }
    this.notify(todos);
  }

  toggleStatusAll(checked): void {
    this.todos = this.todos.map(todo => {
      return {...todo, status: checked ? 'completed' : 'active'};
    });
    this.filter(this.currentFilter);
  }

  private index(todo): number {
    return this.todos.indexOf(todo);

  }
  private notify(todos?) {
    this.todos$.next(todos || [...this.todos]);
  }
}

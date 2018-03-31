import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
  todoAddForm: FormGroup;
  @Input() todo: Todo;
  @Output() todoChange =  new EventEmitter<Todo>();
  @Output() removeTodo =  new EventEmitter<Todo>();
  isEditing = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.todoAddForm = this.formBuilder.group({
      name: [this.todo.name, Validators.required]
    });
  }

  private emit(todo: Todo) {
    this.todoChange.emit(todo);
  }

 changed(checked): void {
   const status =  checked ? 'completed' : 'active';
   this.emit({...this.todo, status});
 }

  activeEdit() {
    this.isEditing = true;
  }

 remove(todo): void {
   this.removeTodo.emit(this.todo);
 }

 editTodo(): void {
   if (this.todoAddForm.dirty && this.todoAddForm.valid) {
     console.log(5678);
     this.emit({...this.todo, name: this.todoAddForm.value.name});
   }
   this.isEditing = false;
   this.todoAddForm.reset();
 }
}

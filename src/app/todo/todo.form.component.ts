import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo.form.component.html'
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private formBuild: FormBuilder, private todoService: TodoService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.todoForm = this.formBuild.group({
      name: ['', Validators.required]
    });
  }

  addTodo(): void {
    if (this.todoForm.dirty && this.todoForm.valid) {
      this.todoService.add({
        name: this.todoForm.value.name,
        date: new Date()
      });
      this.todoForm.reset();
    }
  }
}

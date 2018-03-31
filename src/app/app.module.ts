import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoService } from './todo/todo.service';
import { TodosListComponent } from './todo/todos.list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo.form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFilterComponent } from './todo/todo.filter.component';
import { TodoFooterComponent } from './todo/todo.footer.component';
import { TodoContainerComponent } from './todo/todo.container.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoComponent,
    TodoFormComponent,
    TodoFilterComponent,
    TodoFooterComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

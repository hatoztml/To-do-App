import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoService } from './todo/todo-services/todo.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

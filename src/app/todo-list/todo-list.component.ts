import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  taskArray = [{
    taskName: "Coffee",
    isCompleted: false,
  }];



onSubmit(form: NgForm){

}
}

import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  taskArray = [{
    taskName: "Sample Task",
    isCompleted: false,
  }];



  onSubmit(form: NgForm) {
    console.log(form)
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index)
    this.taskArray.splice(index, 1)

  }

  onCheck(index: number) {
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onAllDelete() {
    this.taskArray = [];
  }

}

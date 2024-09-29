import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] 
})
export class TodoListComponent {

  taskArray = [
    {
      taskName: "Sample Task",
      isCompleted: false,
    }
  ];

  newTaskName: string = ""; 
  isEditing: boolean = false; 
  editingIndex: number | null = null; 
  editedTaskName: string = ""; 

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskArray.push({
        taskName: form.controls['task'].value,
        isCompleted: false
      });
      form.reset();
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onAllDelete() {
    this.taskArray = [];
  }

  // Trigger edit mode
  onEdit(index: number) {
    this.isEditing = true;
    this.editingIndex = index;
    this.editedTaskName = this.taskArray[index].taskName;
  }

  // Save the edited task
  onSaveEdit() {
    if (this.editedTaskName.trim()) {
      this.taskArray[this.editingIndex!] = {
        taskName: this.editedTaskName,
        isCompleted: this.taskArray[this.editingIndex!].isCompleted
      };
      this.cancelEdit();
    } else {
      alert("Task name cannot be empty!");
    }
  }

  // Cancel edit mode
  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = null;
    this.editedTaskName = "";
  }
}

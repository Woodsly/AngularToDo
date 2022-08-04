import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.css']
})
export class RequiredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ToDoList: ToDo[] = [
    {
      Task: "Take out the trash (at night)",
      Completed: false
    },
    {
      Task: "Walk the fish",
      Completed: false
    },
    {
      Task: "Get a job",
      Completed: false
    },
    {
      Task: "Obtain frags",
      Completed: true
    },
    {
      Task: "Wash the dishes",
      Completed: false
    }
  ];

  addTask(form:NgForm):void{
    let newTask: ToDo = {
      Task: form.form.value.toDo,
      Completed: false
    };
    this.ToDoList.push(newTask);
  }

  complete(index: number):void{
    this.ToDoList[index].Completed = true;
  }

}

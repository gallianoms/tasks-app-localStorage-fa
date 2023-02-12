import { Injectable } from '@angular/core';

import {ITask} from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: ITask[];

  constructor() {
    this.tasks = [];
   }

   getTask(): ITask[] {
     if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
     } else {
       this.tasks = JSON.parse(localStorage.getItem('tasks'));
     }

     return this.tasks;
   }

   addTask(task: ITask): void {
      //  unshift inserta un elemento al inicio del arreglo
      this.tasks.unshift(task);
      let tasks;

      if (localStorage.getItem('tasks') === null) {
        tasks = [];
        tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.unshift(task);
        localStorage.setItem('tasks', JSON.stringify('tasks'));
      }
     }

   deleteTask(task: ITask): void {
     if (localStorage.getItem('tasks') !== null) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (task === this.tasks[i]) {
          this.tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
      }
    }
   }



}


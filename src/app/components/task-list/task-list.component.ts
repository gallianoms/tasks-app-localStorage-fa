import { Component, OnInit } from '@angular/core';

import {ITask} from '../../models/Task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.tasks = this.dataService.getTask();
  }

  addTask(task: ITask) {
    this.dataService.addTask(task);
  }

}

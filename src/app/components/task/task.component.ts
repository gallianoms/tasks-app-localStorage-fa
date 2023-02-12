import { Component, OnInit, Input } from '@angular/core';

import {ITask} from '../../models/Task';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task: ITask;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  deleteTask(task: ITask) {
    if (confirm('Are you sure to delete it?')) {
      this.dataService.deleteTask(task);
    }
  }
  
}

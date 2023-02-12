import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ITask} from '../../models/Task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  title: string;
  description: string;
  @Output() taskAdded = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    // console.log(this.title, this.description);
    this.taskAdded.emit ({
      title: this.title,
      description: this.description,
      hide: true
    });
    this.title = '';
    this.description = '';
  }

}

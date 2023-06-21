import { TasksService } from './../tasks.service';
import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  listOfTasks :Task[] =[];
  constructor(private tasksService : TasksService){
    this.listOfTasks=tasksService.getTasks();
  }
}

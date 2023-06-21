import { TasksService } from './../tasks.service';
import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  listOfTasks :Task[] =[];
  
  constructor(private tasksService : TasksService){
    this.listOfTasks=tasksService.getTasks();
  }
}

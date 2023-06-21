import { Injectable } from '@angular/core';
import { Task } from './task'; 

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskList: Task[]=[
    {title:"Faire le ménage",done:false},
    {title:"Nourir les animaux",done:false},
    {title:"Prendre RER",done:false},
    {title:"Manger",done:true},
  ];
  constructor() { }

  getTasks ():Task[]{
    return this.taskList;
  }

  addTasks(task2add : Task):void {
    this.taskList.push(task2add);
  }
}

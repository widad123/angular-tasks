import { Component } from '@angular/core';
import { Task } from './task';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Task[]=[
    {title:"Faire le ménage",done:false},
    {title:"Nourir les animaux",done:false},
    {title:"Prendre RER",done:false},
    {title:"Manger",done:true},
  ];

  task2add : string="";
  addTask(){
    let task:string =this.task2add;
    this.taskList.push({title:task,done:false});
    this.task2add="";
  }
}

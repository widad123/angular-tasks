import { Component } from '@angular/core';
import { Task } from '../task';
import{FormsModule} from '@angular/forms'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  taskList: Task[]=[
    {title:"Faire le ménage",done:false},
    {title:"Nourir les animaux",done:false},
    {title:"Prendre RER",done:false},
    {title:"Manger",done:true},
  ];

  task2add : string="";
  addTask(){    
    let task:string =this.task2add;
    if(task!=""){
    this.taskList.push({title:task,done:false});
    this.task2add="";
    }
  }
}

import { Component } from '@angular/core';
import { Task } from '../task';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  taskList: Task[]=[
    {title:"Faire le ménage",done:false},
    {title:"Nourir les animaux",done:false},
    {title:"Prendre RER",done:false},
    {title:"Manger",done:true},
  ];

  updateTask(title:string){
    this.taskList.forEach(task => {
      if(task.title === title){
          task.title = title;
      }
    })
  }
}

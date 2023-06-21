import { Component ,Input} from '@angular/core';
import { TasksService } from './../tasks.service';
import { Task } from '../task';
import{FormsModule} from '@angular/forms'


@Component({
  selector: 'app-delet-task',
  templateUrl: './delet-task.component.html',
  styleUrls: ['./delet-task.component.css']
})
export class DeletTaskComponent {
  @Input()title:string="";
  
  constructor(private tasksService : TasksService){}
/***
 * fonction qui permet de supprimer une tache
 */
  deleteTask():void {
    let listTasks=this.tasksService.getTasks();
    listTasks.forEach((task,index)=>{
      if(task.title===this.title) {
       listTasks.splice(index,1)
      }
    })
    
  }
}

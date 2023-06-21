import { Component,Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  @Input() title :string = "";
  
  hide :boolean = true;
  
  constructor(private tasksService : TasksService) {}

  isHide() {
    if(this.hide){
        this.hide=false;
    }
  }

  updateTask(title:string) {
    this.tasksService.setTask(title);
    this.title="";
  }

}
  

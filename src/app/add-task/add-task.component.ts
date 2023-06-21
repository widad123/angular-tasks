import { Component } from '@angular/core';
import { Task } from '../task';
import{FormsModule} from '@angular/forms'
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
task2add : string="";

constructor(private tasksService : TasksService){}

addTask(){
  if(this.task2add!=""){
    this.tasksService.addTasks(new Task(this.task2add,false))
  }
   this.task2add="";
}
}

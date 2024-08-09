import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { nuevaTarea } from './task/task.model';
import { TasksService } from '../../services/tasks.service';

//conseguimos un user random en base a longitud del array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-app-task',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './app-task.component.html',
  styleUrl: './app-task.component.css'
})
export class AppTaskComponent {

  selectedUserId = DUMMY_USERS[randomIndex];
  
  @Input({required:true}) userId!: string; // ? puede ser nulo, ! no sera nulo  
  @Input({required:true}) name!: string; // ? puede ser nulo, ! no sera nulo
  isAddingTask = false; //propiedad booleana para validar si se agrega tarea
  //private taskService = new TasksService;//inyeccion de dependencia
  

  constructor(private tasksService: TasksService //inyeccion de dependencias

  ){}
  /**
   * metodo para conseguir las tareas del usuario seleccionado
   */
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
    
  }

  //le llega el id emitido , y lo quita de la lista, lo 'completa'
  onCompleteTask(id: string){
    return this.tasksService.removeTask(id);
  }

  /**
   * metod para abrir modal de agregar tarea
   */
  onStartAddTask(){
    this.isAddingTask = true;
  }

  /**
   * dentro del modal al darle click en el boton de cancelar ponga valor false
   */
  onCloseAddTask(){
    this.isAddingTask = false;
  }

  /**
   * metodo de agregar que escuchara los subcomponentes
   * no usado , ya que usamos desde el service
   */
  // onAddTask(taskData: nuevaTarea){//de tipo nuevaTarea
  
  // this.isAddingTask = false;
  // }
}



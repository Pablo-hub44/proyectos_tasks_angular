import { Component, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { EventEmitter } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";
import { DatePipe } from '@angular/common';

//creamos una interface conla estructura de las tasks
//creamo su model en un archivo aparte

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>() //listener de la propiedad complete,  permiten que el hijo emita eventos hacia el padre

  /**
   * metodo para emitir el id del task al otro metodo del mismo nombre
   */
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}

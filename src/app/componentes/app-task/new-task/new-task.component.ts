import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type nuevaTarea } from '../task/task.model';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required : true}) userId!: string;
   //atributo de salida que llemara al metodo oncancel
  @Output() close = new EventEmitter<void>()
  //@Output() addTarea = new EventEmitter<nuevaTarea>(); ya no usado


  //atributos donde almacenaremos los datos del form
  titulo = '';
  resumen = '';
  fecha = '';

  constructor(private tasksService: TasksService){
  }


 /**
  * cancelar en el boton enitimos el etributo que no lleva nada simplemente lo emite a este nivel del componente
  * ya q el metodo digamos padre ahi es donde estamos poniendo this.isAddingTask = false;, y 
  * y aca este metodo checa ese metodo del padre, como se pone false, oculta el 'modal' :)
  */
 onCancel(){
 this.close.emit();// Emite un evento close para notificar al componente padre que el modal debe cerrarse.
 }



 onSubmit() {
  //this.addTarea.emit({
    //titulo: this.titulo,
    //resumen : this.resumen,
    //fecha: this.fecha
  //});

  this.tasksService.addTask({
    titulo: this.titulo,
    resumen : this.resumen,
    fecha: this.fecha
  }, this.userId)
  this.close.emit(); // Cierra el modal después de agregar la tarea
  // Emite un evento close para notificar al componente padre que el modal debe cerrarse.Emite un evento close para notificar al componente padre que el modal debe cerrarse.
  }
  
}

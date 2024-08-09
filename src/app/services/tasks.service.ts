import { Injectable } from '@angular/core';
import { type nuevaTarea } from '../componentes/app-task/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  isAddingTask = false;
  constructor() { }

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Aprender todo lo básico y avanzadas características de Angular',
      dueDate: '2024-08-06'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'JavaScript Avanzado',
      summary: 'Dominar técnicas avanzadas de JavaScript',
      dueDate: '2024-08-13'
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Introducción a Python',
      summary: 'Conocer los fundamentos de Python y sus aplicaciones',
      dueDate: '2024-08-10'
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Data Science con Python',
      summary: 'Aprender técnicas de ciencia de datos usando Python',
      dueDate: '2024-08-20'
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'React Básico',
      summary: 'Conocer los fundamentos de React y su ecosistema',
      dueDate: '2024-08-15'
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'React Avanzado',
      summary: 'Dominar conceptos avanzados de React y optimización de aplicaciones',
      dueDate: '2024-08-25'
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'Bases de Datos SQL',
      summary: 'Conocer y manejar bases de datos relacionales con SQL',
      dueDate: '2024-08-12'
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Bases de Datos NoSQL',
      summary: 'Explorar bases de datos NoSQL y sus aplicaciones',
      dueDate: '2024-08-22'
    },
    {
      id: 't9',
      userId: 'u5',
      title: 'Desarrollo Web con HTML y CSS',
      summary: 'Aprender a crear páginas web usando HTML y CSS',
      dueDate: '2024-08-08'
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Diseño Responsive',
      summary: 'Implementar diseños web que se adapten a diferentes dispositivos',
      dueDate: '2024-08-18'
    },
    {
      id: 't11',
      userId: 'u6',
      title: 'Programación en Java',
      summary: 'Conocer los fundamentos de programación en Java',
      dueDate: '2024-08-14'
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Desarrollo de Aplicaciones con Spring',
      summary: 'Crear aplicaciones empresariales usando el framework Spring',
      dueDate: '2024-08-24'
    }
  ];

  /**
   * 
   * @param userId conseguimos las tareas por usuario, antes estaba en el componente de tasks pero ahora esta aca en el service
   * @returns lista de tareas
   */
  getUserTasks(userId: string){
    return this.tasks.filter((task)=> task.userId == userId)
  }

/**
 * 
 * @param taskData 
 * @param userId 
 */
  addTask(taskData: nuevaTarea, userId:string){
    this.tasks.unshift({//seteamos el task al array
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.titulo,
      summary: taskData.resumen,
      dueDate: taskData.fecha
    });
    this.isAddingTask = false;
  }

  /**
   * 
   * @param id 
   */
  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id != id);
  }
}

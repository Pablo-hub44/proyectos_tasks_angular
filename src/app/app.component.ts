import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { UserComponent } from './componentes/user/user.component';
import { DUMMY_USERS } from './componentes/dummy-users';
import { AppTaskComponent } from './componentes/app-task/app-task.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from './componentes/app-task/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, AppTaskComponent, NgFor, NgIf, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';

  users= DUMMY_USERS;//asignamos el objeto a users

  selectedUserId = 'u1';//valor por defecto

  get selectedUser(){
    //buscamos el user en el array de objetos
    return this.users.find((user)=>
       user.id === this.selectedUserId
    )! //! means que nunca sera nulo
  }



  onSelectUser (id: string){
    //asignamos el id seleciconado el nuestra variable
    this.selectedUserId = id;
    console.log('Usuario con id '+id+' seleccionado');
  }
}

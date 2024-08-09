import { Component, computed, signal, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";

//conseguimos un user random en base a longitud del array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//creamos un alias con type, la forma del objeto que necesitamos
//movido a su modelo


//tambien se pueden crear interfaces
interface User2{
  id: string,
  avatar: string, 
  name:string
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //sin signals
  selectedUser = DUMMY_USERS[randomIndex];

  //sin el uso de signals
   imagePath(){
   return 'assets/users/'+this.user.avatar; //antes +this.selectedUser.avatar
  }

    //metodo cuando se clickee el boton de user sin el uso de signala
  //onSelectUser(){
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser = DUMMY_USERS[randomIndex];
  
  //}

  
  //solo con strings
  //decorador para definir q este campo es un propiedad input, poniendole el required true, le decimos que no va a ser nulo
  //@Input({required:true}) id!: string;
  //@Input({required:true}) avatar!: string; //! para que acepte indefinido
  //@Input({required:true}) name!: string;
  @Output() select = new EventEmitter();//de salida emitira valores personlizado a traves de esa propiedad select a cualquier componente padre interesado

  

  //otra manera con input q usa signals, esta manera es mas nueva y actualmente no esta en muchos proyectos actuales
  //id= input.required<string>();
  //avatar = input.required<string>();
  //name = input.required<string>();
  //select = output<string>();
  
 




  //signal va a notificar cambios
  //selectedUser = signal(DUMMY_USERS[randomIndex]); //accedemos el primer array de objetos

  //imagePath = computed(()=> 'assets/users/'+this.avatar)//toma la funcion como argumento
  
  //onSelectUser(){
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set( DUMMY_USERS[randomIndex]);
  
  //}




  //con objetos
  @Input({required:true}) user!:User ;
  @Input({required:true}) selected!: boolean;




  //creamos una funcion para el evento del select
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}

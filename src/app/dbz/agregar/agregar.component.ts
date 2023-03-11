import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('nuevo') new: Personaje = {
    nombre: ' ',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  //@Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if(this.new.nombre.trim().length === 0){ return }
    console.log(this.new)

    //this.onNewPersonaje.emit(this.new)

    this.dbzService.agregarPersonaje(this.new);
    this.new = {
      nombre:'',
      poder: 0
    }

  }

}

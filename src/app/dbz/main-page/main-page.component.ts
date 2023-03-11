import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // Arreglo de Personajes

  nuevo: Personaje = {
    nombre: "Maestro Rochi",
    poder: 1000
  }

  constructor(){
  }

}

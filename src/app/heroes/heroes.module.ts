import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  // Las declaraciones vna a ser los componenetes que tengo
  declarations:[
        HeroeComponent,
        ListadoComponent
  ],
  // Que coaas quiero hacervisibles fuera de este módulo
  exports:[
      ListadoComponent
  ],
  // Aquí solo van módulos. Dentrode los imports solo van módulos
  imports:[
    CommonModule
],


})
export class HeroesModule{

}

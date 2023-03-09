import { Component } from '@angular/core';

@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent {

  name:string = 'Ironman';
  edad: number = 45

  obtenerNombre(): string{
    return `${this.name} - ${this.edad}`
  }
  get toUpperCase(){
    return this.name.toUpperCase();
  }
  changeHeroe(): void{
    this.name = 'Carlos'
    this.edad = 24
  }
}

import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contandor.component';

@NgModule({
  declarations: [
      ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]
})
export class ContadorModule{

}

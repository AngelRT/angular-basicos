import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ //van los modulos que contiene ese module
    ContadorComponent
  ],

  exports: [
    ContadorComponent
  ]
})

export class ContadorModule{}

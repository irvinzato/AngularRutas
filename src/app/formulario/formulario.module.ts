import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponent],            //Ahora lo tenemos aqui importado y lo sacamos del modulo principal "app.module.ts"
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule                                   //Puede ser utilizado en el HTML como formulario reactivo para capturar los datos del formulario
  ]
})
export class FormularioModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { FormularioComponent } from './formulario.component';

//Lazy loading rutas DIA 19
//CREADO CON "ng g formulario --routing true" genera este modulo y formulario.module.ts
//De esta manera nos independizamos de la aplicacion principal
//Aqui podemos definir las rutas relacionadas con este modulo

const routes: Routes = [          //La ruta que tenia en mi app-routing ahora la paso para aca
  { path: '',                                         //Realizamos las importaciones correspondientes y no le pones aqui ruta por que ya la dimos en el app
  component: FormularioComponent,         //Debemos poner nuestro modulo en las declaraciones de nuestro formulario.module.ts y sacarlo del app por que ahora sera independiente        
  canDeactivate: [WithoutSaveGuard],                      
  resolve: { departments: DataResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],         //forChild es para entregar en otro provider los modulos hijos, este modulo se cargara BAJO DEMANDA, cuando Angular lo necesite
  exports: [RouterModule]
})
export class FormularioRoutingModule { }

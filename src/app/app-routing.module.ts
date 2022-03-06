import { DataResolverService } from './resolvers/data.resolver.service';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'galerias/:id', component: GaleriaComponent },    //Le indico que le pasaran un id a la ruta
  // { path: 'formulario', 
  // component: FormularioComponent, 
  // canDeactivate: [WithoutSaveGuard],                      //Usamos CanDeactivate que tambien es un guard para preguntar al usuario si quiere guardar o no sus cambios
  // resolve: { departments: DataResolverService } },        //Utilizo la propiedad resolver que espera un objeto, le paso mi objeto con la propiedad y le asigno el nombre de la clase que le di a mi resolver, puedo utilizar el mismo resolve en la ruta que quiera                   
  //LA RUTA ANTERIOR PASA A SER LA SIGUIENTE, YA QUE AHORA TIENE SUS PROPIAS RUTAS
  { path: 'formulario', loadChildren: () =>                 //El path se mantiene con la ruta anterior, en la propiedad loadChildren usamos sitanxis de dinamic import(importamos el modulo de manera dinamica)
    import('./formulario/formulario.module').then(m => m.FormularioModule)    //le pasamos la ruta de nuestro modulo al import, nos devulve una promesa y recibimos el modulo en cuestion, la "m" es por convencion y obtenemos el Module
  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'users', component: UserComponent, canActivate:[PermissionsGuard],                //Users seria nuestro componente padre, VAMOS A PROTEGER ESTA URL DE USUARIOS con GUARDS usando canActivate y pasandole nuestro guard
  children: [                                               //RUTAS HIJAS, CHILDREN espera un array de rutas
    { path: 'list', component: ListComponent },
    { path: 'details', component: DetailsComponent },
  ] 
  },                         
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],      //forRoot es utilizado para poner todas las rutas en el modulo PRINCIPAL raiz, todo lo que no es lazy loading, carga de manera inmediata, forRoute seria el Inyector principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
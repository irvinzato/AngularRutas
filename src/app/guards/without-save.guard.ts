import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//SIRVE PARA ASEGURARSE SI UN USUARIO PUEDE DEJAR LA RUTA

export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      if(this.hasUser()){         //LO PODEMOS USAR PARA VERIFICAR SI EL FORMULARIO TIENE CAMPOS LLENOS QUE NO SE HAN GUARDADO Y PREGUNTAR AL USUARIO SI NO QUIERE GUARDAR O SI LOS CAMBIOS
        return true;
      }

      return confirm('Hey, no guardaste cambios');      //metodo de Js
  }

  hasUser(): boolean {          //Tambien simularemos un logeo
    return false;
  }
}

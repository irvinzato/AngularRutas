import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//SIRVE PARA ASEGURARSE SI UN USUARIO TIENE ACCESO O NO DE ENTRAR A ALGUNA RUTA

export class PermissionsGuard implements CanActivate {      //Esta interface permite acceder o no a un usuario a una determinada ruta
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){       //SI EL USUARIO ESTA LOGEADO
      return true;
    }
    //PODEMOS HACER UNA RE DIRECCION AQUI A DONDE QUERAMOS, POR EJEMPLO AL LOGIN
    alert('Lo sentimos pero no tienes permisos');
    return false;
  }             //next: ActivatedRouteSnapshot,state: RouterStateSnapshot POR AHORA NO USAREMOS RUTAS NI ESTADOS en el metodo
  
  hasUser(): boolean {      //Simularemos el logeo de un usuario
    return false;
  }

}

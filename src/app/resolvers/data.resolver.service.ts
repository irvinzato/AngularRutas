import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';       //Normalmente se usa su metodo cuando hacemos conexiones con APIS que nos sirvan datos, el componente solo cargaria cuando tenga esa data

//NORMALMENTE SE USAN LOS RESOLVER PARA HACER UNA PETICION A UNA API
//UN RESOLVER ES EL MECANISMO QUE SE ENCARGA DE QUE CUANDO LLEGUEMOS A UN DETERMINADO COMPONENTE O VISTA YA TENER DATOS LISTOS
//PARA RENDERIZAR Y EL COMPONENTE NO INICIA SU CICLO DE VIDA HASTA QUE LA DATA ESTA LISTA

const departments = ['Front End','Back Ends','Full Stack','Analista','Otro'];

@Injectable({
    providedIn: 'root'
})

export class DataResolverService implements Resolve<any> {  //Estamos tipando de tipo any por que no tenemos una interface creada para esto aun

    resolve():Observable<any>{      //Como no tenemos un service ni una API aun, dejaremos una tarea pendiente (TODO: CALL SERVICE)
        //TODO: CALL SERVICE
        return of(departments);     //of viene del "rxjs", converira el array en un observable
    }
}

//Se implementa en la ruta que deseamos "app-routing"
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  departments: string[] = [];                       //En esta variable guardaremos la data solicitada

  constructor(
    private readonly route: ActivatedRoute          //Lo usaremos para trabajar con resolves(Tambien lo ocupamos para pasar parametros en otros componentes)
  ) { }

  ngOnInit():void {
    this.departments = this.route.snapshot.data['departments']         //Aqui es donde voy a pedir mi data

  }

}

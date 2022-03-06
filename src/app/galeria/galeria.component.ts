import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  id!: string;

  constructor(private readonly route: ActivatedRoute) { }     //Volvemos a activar para poder recibir el parametro

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];       //Aqui va el nombre que pusimos en la ruta
      }
    );
  }

}

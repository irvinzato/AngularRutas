import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  name!: string;      //Creada para guardar el valor que me pasa por QueryParams, ocupa la directica en el constructor

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];          //Variable que estamos pasando
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  goToHeroes(): void {      //USAREMOS QUERY SELECTOR PARA MANDAR DATOS ATRAVES DE RUTAS
    this.router.navigate(['heroes'], { queryParams: { name: 'Irvinzato' } });
  }

  goToGalerias(): void {
    this.router.navigate(['galerias', '230']);      //De esta forma le paso un argumento a la ruta, pudiera ser un string o cualquier tipo
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultadoBusqueda.component.html'
})
export class ResultadoBusquedaComponent implements OnInit {

  heroes: any[] = [];
  termino: string = "";

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroe(params.termino);
      this.termino = params.termino;
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['heroe', idx]);
  }

}

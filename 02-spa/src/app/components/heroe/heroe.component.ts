import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    activatedRoute.params.subscribe(params => {

      let id: number = params.id;
      this.heroe = heroesService.getHeroe(id);
    });
  }

}

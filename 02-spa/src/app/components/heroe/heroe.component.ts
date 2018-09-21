import { Component, OnInit } from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    activatedRoute.params.subscribe(params => {

      let id: number = params.id;
      this.heroe = heroesService.getHeroe(id);
    });
  }

  ngOnInit() {
  }

}

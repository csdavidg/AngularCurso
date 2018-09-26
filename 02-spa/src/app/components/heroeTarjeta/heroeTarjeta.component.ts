import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroeTarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  verHeroe() {
    console.log("Heroe ", this.heroe);
    this.router.navigate(['heroe', this.heroe.id]);
  }

}

import {Component, OnInit, Input/*, Output, EventEmitter*/} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroeTarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  /*verHeroe() {
    this.heroeSeleccionado.emit(this.heroe.id);
  }*/

  verHeroe() {
    this.router.navigate(['heroe', this.heroe.id]);
  }

}

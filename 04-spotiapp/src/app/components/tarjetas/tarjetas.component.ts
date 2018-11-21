import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  constructor() {
  }

  @Input() items: any[] = [];

}

import {Component} from '@angular/core';
import {DeseosService} from "../../services/deseos.service";

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  constructor(public deseosService: DeseosService) {

  }

}

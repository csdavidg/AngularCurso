import {Component} from "@angular/core";
import {DeseosService} from "../../services/deseos.service";

@Component({
  selector: 'terminados-page',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor(public deseosService: DeseosService) {

  }

}

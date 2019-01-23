import {Component} from "@angular/core";


import {DeseosService} from "../../services/deseos.service";
import {Lista} from "../../models";
import {AgregarPage} from "../agregar/agregar.component";

import {NavController} from "ionic-angular";

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor(public deseosService: DeseosService, private navController: NavController) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }

  agregarLista() {
    this.navController.push(AgregarPage);
  }

}

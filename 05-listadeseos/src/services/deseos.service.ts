import {Injectable} from "@angular/core";
import {Lista} from "../models";

@Injectable()
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Terminar Curso Angular');
    const lista2 = new Lista('Terminar Curso Spring');

    this.listas.push(lista1, lista2);
    console.log(this.listas);

  }

}

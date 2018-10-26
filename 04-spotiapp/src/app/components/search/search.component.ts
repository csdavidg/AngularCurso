import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor() {
  }

  buscar(valor: string) {
    console.log(valor);
  }

}

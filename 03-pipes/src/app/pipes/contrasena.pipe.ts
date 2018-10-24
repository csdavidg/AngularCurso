import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {

    if (!mostrar) {
      return value.replace(/./g,'*');
    }
    return value;
  }

}

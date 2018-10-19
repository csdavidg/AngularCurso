import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    value = value.toLowerCase();

    let arrNombre = value.split(' ');
    if (todas) {
      for (let i in arrNombre) {
        arrNombre[i] = arrNombre[i][0].toUpperCase() + arrNombre[i].substr(1);
      }
    }else{
      arrNombre[0] = arrNombre[0][0].toUpperCase() + arrNombre[0].substr(1);
    }


    return arrNombre.join(' ');
  }

}

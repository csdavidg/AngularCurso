import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[]): any {
    const noImage = 'assets/img/noimage.png';
    if (!imagenes) {
      return noImage;
    }

    if (imagenes.length > 0) {
      return imagenes[0].url;
    } else {
      return noImage;
    }

    return noImage;
  }

}

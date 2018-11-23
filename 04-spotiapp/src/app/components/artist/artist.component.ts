import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any;

  constructor(private activatedRoute: ActivatedRoute, private servicio: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      servicio.getInformacionArtista(params['id'])
        .subscribe(data => {
          console.log('datos ', data);
        });
    });
  }

}

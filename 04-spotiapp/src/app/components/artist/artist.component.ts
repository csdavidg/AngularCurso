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
  tracks: any[];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private servicio: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {

    this.servicio.getInformacionArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.loading = false;
      });
  }

  getTopTracks(id: string): any {
    this.servicio.getTopTracks(id)
      .subscribe(data => {
        console.log(data);
        this.tracks = data;
      });
  }

}

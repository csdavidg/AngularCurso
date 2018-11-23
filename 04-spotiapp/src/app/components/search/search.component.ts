import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private service: SpotifyService) {
    this.loading = false;
  }

  buscar(valor: string) {
    this.loading = true;
    this.service.getArtistas(valor).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}

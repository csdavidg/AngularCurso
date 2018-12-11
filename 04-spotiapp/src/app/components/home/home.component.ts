import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  showError: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.showError = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
      this.showError = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
      console.log(error);
    });
  }

  ngOnInit() {
  }

}

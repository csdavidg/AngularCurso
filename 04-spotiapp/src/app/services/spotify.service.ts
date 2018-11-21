import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQueryService(pathService: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBMn4ZJtV7SzSuy5MWqyPLI8pyGPcQogDYK2SHL7sy4xahk5yFwt6vNN2Hp3ayT3l3tGYLhZAf8h4lH2B8'
    });

    const url = `https://api.spotify.com/v1/${pathService}`;

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQueryService('browse/new-releases?country=CO&limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtista(termino: string) {

    return this.getQueryService(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));

  }

}

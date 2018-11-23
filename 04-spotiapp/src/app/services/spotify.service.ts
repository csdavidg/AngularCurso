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
      'Authorization': 'Bearer BQBH7hkCHcWhciBnnSEJFQZSqLRTRr-AiePir8YB7AQ6oINuvzCfyS9oyKinlMwq3X67uCZ5RWXst3tJa9M'
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

  getArtistas(termino: string) {

    return this.getQueryService(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));

  }

  getInformacionArtista(id: string) {
    return this.getQueryService(`artists/${id}`)
      .pipe(map((data: any) => data));
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDAAHkxUPIRubuoHf4Rkmc8bRDsLxrA_UguolDALeYZAUM22sBK12IMh3V2br4942chk2HzF26zInDwhzk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=20', {headers});
  }
}

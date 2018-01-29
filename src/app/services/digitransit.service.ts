import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {

    digitransitUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql ';

    routeSearch = 'käenkuja';

    constructor(private http: HttpClient) {
    }

    getRoutes() {
        const body =
            `{
              stops(name: "${this.routeSearch}") {
                name
                lon
                lat
                patterns {
                  name
                  route {
                    shortName
                    longName
                    mode
                  }
                 directionId
                }
              }
            }`;

        const headers = {
            headers: new HttpHeaders().set('Content-Type', 'application/graphql')
        };

        interface ReittiData {
            data: object;
        }

        return this.http.post<ReittiData>(this.digitransitUrl, body, headers);
    }

}

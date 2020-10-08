import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity} from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {

  constructor(private http: HttpClient) { }

  getEntity(entityId: string): Observable<any>
  {
    return this.http.get<any>(`https://www.wikidata.org/wiki/Special:EntityData/${entityId}.json`).pipe(
      map(x => x.entities[entityId])
    );
  }

  getImageUrl(imageName: Entity): Observable<any> {
    return this.http.get<any>(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url`,
      {params: {
          titles: `File:${imageName}`,
          origin: '*'
        }}).pipe(
      map(x => x.query.pages[Object.keys(x.query.pages)[0]])
    );
  }
}

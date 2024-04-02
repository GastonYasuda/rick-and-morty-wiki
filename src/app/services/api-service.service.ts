import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICharacter, Result } from '../../model/character.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://rickandmortyapi.com/api/';

  allCharacters?: Result[] = [];
  howManyPages?: number;

  getCharacterByPage(): Observable<ICharacter> {
    return this._http.get<ICharacter>(`${this.urlBase}/character`);
  }

  getCharacterByPageId(id: number): Observable<ICharacter> {
    return this._http.get<ICharacter>(`${this.urlBase}/character/?page=${id}`);
  }

  getCharacterById(id: number):Observable<ICharacter[]>{
    return this._http.get<ICharacter[]>(`${this.urlBase}/character/${Number(id)}`)
  }

  getCharacterByName(name:string):Observable<Result[]>{    
    return this._http.get<Result[]>(`${this.urlBase}/character/?name=${String(name)}`)    
  }

  getAllCharacters() {
    this.allCharacters=[]
    this.getCharacterByPage().subscribe((data) => {
      this.howManyPages = data.info.pages;
      if (this.howManyPages) {
        for (let i = 0; i <= this.howManyPages; i++) {
          this.getCharacterByPageId(i).subscribe((data: any) => {
            this.allCharacters?.push(data.results);
          });
        }
      }
    });
    return this.allCharacters;
  }

  getCharacterByLocation():Observable<Result[]>{
    return this._http.get<Result[]>(`${this.urlBase}/location/`)
  }
  getCharacterByLocationById(locationId: number):Observable<Result[]>{
    return this._http.get<Result[]>(`${this.urlBase}/location/${Number(locationId)}`)
  }

  getCharacterByLink(link:string):Observable<Result[]>{
    return this._http.get<Result[]>(`${link}`)
  }
}

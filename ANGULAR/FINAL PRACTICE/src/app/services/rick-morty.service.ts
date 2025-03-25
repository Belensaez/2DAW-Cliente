import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApiRM } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private URI:string="https://rickandmortyapi.com/api/character";
  constructor(private http:HttpClient) {
  
   }
   getCharacters():Observable<InfoApiRM>{
    return this.http.get<InfoApiRM>(this.URI);
   }
}

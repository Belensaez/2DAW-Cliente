import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApiValorant } from '../common/interfaces3';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private URI:string="https://valorant-api.com/v1/agents";
  constructor(private http:HttpClient) {
  
   }
   getCharacters():Observable<InfoApiValorant>{
    return this.http.get<InfoApiValorant>(this.URI);
   }
}

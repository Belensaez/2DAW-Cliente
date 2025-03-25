import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoFinalSpace} from '../common/interfaces2';

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {
  private URI:string="https://finalspaceapi.com/api/v0/character";
  constructor(private http:HttpClient) {
  
   }
   getCharacters():Observable<infoFinalSpace>{
    return this.http.get<infoFinalSpace>(this.URI);
   }
}

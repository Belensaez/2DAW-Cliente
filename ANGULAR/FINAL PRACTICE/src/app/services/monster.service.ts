import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoMonster } from '../common/interfaces4';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private URI:string="https://mhw-db.com/weapons?q={%22id%22:{%22$gte%22:1,%22$lte%22:20}}";
  constructor(private http:HttpClient) {
  
   }
   getCharacters():Observable<InfoMonster>{
    return this.http.get<InfoMonster>(this.URI);
   }
}

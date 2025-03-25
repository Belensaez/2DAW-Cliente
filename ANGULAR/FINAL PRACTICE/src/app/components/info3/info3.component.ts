import { Component, OnInit } from '@angular/core';
import { ValorantService} from '../../services/valorant.service';
import { CharacterValorant, InfoApiValorant} from '../../common/interfaces3';
import {ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info3.component.html',
  styleUrls: ['./info3.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class Info3Component implements OnInit{
  dataApi!:InfoApiValorant;
  characters:CharacterValorant[]=[];
  constructor(private vservice: ValorantService){


  }
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters() {
    this.vservice.getCharacters().subscribe({
       next: (value) => {
        this.dataApi=value;
        this.characters=this.dataApi.data;
        console.log(value);
    
      },
      error: (err) => {
        console.error(err);
        
      },
      complete: () => {
        console.log("Done");
        
    }
    
    
  }

    )
  }
  

}

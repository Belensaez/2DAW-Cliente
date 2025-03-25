import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { CharacterRM, InfoApiRM } from '../../common/interfaces';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
 
  
})
export class InfoComponent implements OnInit{
  dataApi!:InfoApiRM;
  characters:CharacterRM[]=[];
  constructor(private rmservice: RickMortyService){


  }
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters() {
    this.rmservice.getCharacters().subscribe({
       next: (value) => {
        this.dataApi=value;
        this.characters=this.dataApi.results
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

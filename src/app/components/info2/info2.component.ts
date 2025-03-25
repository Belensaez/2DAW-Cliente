import { Component, OnInit } from '@angular/core';
import { FinalSpaceService } from '../../services/final-space.service';
import { CharacterFinalSpace, infoFinalSpace } from '../../common/interfaces2';
import {ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-info',
  templateUrl: './info2.component.html',
  styleUrl: './info2.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class Info2Component implements OnInit{
  dataApi!:infoFinalSpace;
  characters:CharacterFinalSpace[]=[];
  constructor(private fsservice: FinalSpaceService){


  }
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters() {
    this.fsservice.getCharacters().subscribe({
       next: (value) => {
        this.dataApi=value;
        this.characters=this.dataApi;
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

import { Component, OnInit } from '@angular/core';
import { MonsterService} from '../../services/monster.service';
import { CharacterMonster, InfoMonster} from '../../common/interfaces4';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info4.component.html',
  styleUrl: './info4.component.css',

})
export class Info4Component implements OnInit{
  dataApi!:InfoMonster;
  characters:CharacterMonster[]=[];
  constructor(private mservice: MonsterService){


  }
  ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters() {
    this.mservice.getCharacters().subscribe({
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

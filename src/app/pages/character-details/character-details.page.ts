import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';	
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: any;
  characterId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
 
  ngOnInit() {
    // Getting ID from link of character page passed by method openDetails
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    
    //Bring information of character by ID
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];
      
    });

  }

}

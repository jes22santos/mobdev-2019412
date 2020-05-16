import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters = [];
    offset = 0;


    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        this.loadCharacters();

    }
    // method to load character with parameter optional, according the event in html page
    loadCharacters(event?) {

        this.api.getCharacters(this.offset).subscribe(res => {

            this.characters = this.characters.concat(res);
            
            if (event) {
                event.target.complete();
            }
        })

    }
    // mothod to incrise the offset and call the method load Character to bring a new list
    loadMoreCharacters(event) {

        this.offset += 10;
        this.loadCharacters(event);
    }

    // method to open character details, passing the character ID as parameter
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);

    }
}

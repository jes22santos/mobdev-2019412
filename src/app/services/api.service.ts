import { Injectable } from '@angular/core';	
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 
  
   getCharacters(offset) {
      return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${offset}`);
    }
 
    
    getCharacter(id) {
      return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

 
   /* getEpisodes() {
      return this.http.get(`https://8100-a6fa99a5-c714-4c49-8c2b-41e07a1984b6.ws-eu01.gitpod.io/assets/episodes.json`);
    }*/

    getEpisodes() {
      return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }

    getEpisode(id) {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
  
    /* getQuotes() {
      return this.http.get(`https://8100-a6fa99a5-c714-4c49-8c2b-41e07a1984b6.ws-eu01.gitpod.io/assets/quotes.json`);
    }*/
    getQuotes() {
      return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
    
    getQuoteA(author) {
      return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${encodeURI(author)}`);
    }

    searchDeath(searchname){
       return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${encodeURI(searchname)}`)
    }

}

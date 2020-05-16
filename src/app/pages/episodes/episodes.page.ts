import { Component, OnInit } from '@angular/core';	
import { Router } from '@angular/router';	
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;
 
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

      // bring all episodes from api service
      this.episodes = this.api.getEpisodes();
      
  }

  // method to open episode detail, passing the episode ID as parameter
  openDetails(episode) {
    
    let episodeId = episode.episode_id;
    this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    
  }
}

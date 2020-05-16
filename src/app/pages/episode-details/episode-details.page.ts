import { ApiService } from './../../services/api.service';
import { LikeService } from './../../services/like.service';
import { Component, OnInit } from '@angular/core';	
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: any;
  isLike = false;
  episodeId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeService: LikeService) { }

  ngOnInit() {
      
    // Getting ID from link of episode page passed by method openDetails
      this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');

    //Bring information of episode by ID
      this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
      
       });
    // calling likeService to check actul status of the episode
       this.likeService.isLike(this.episodeId).then(isLik => {
       this.isLike = isLik;
    });
  }

  // method to change status of episode as liked
  likeEpisode() {
    this.likeService.likeEpisode(this.episodeId).then(() => {
      this.isLike = true;
    });
  }
 
  // method to change status of episode as disliked
  dislikeEpisode() {
    this.likeService.dislikeEpisode(this.episodeId).then(() => {
      this.isLike = false;
    });
  }

}

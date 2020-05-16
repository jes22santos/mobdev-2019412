import { Injectable } from '@angular/core';	
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'likeEpisodes';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private storage: Storage) { }

    getAllLikeEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }

    isLike(episodeId) {
    return this.getAllLikeEpisodes().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }

  likeEpisode(episodeId) {
    return this.getAllLikeEpisodes().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [episodeId]);
      }
    });
  }

  dislikeEpisode(episodeId) {
    return this.getAllLikeEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

}

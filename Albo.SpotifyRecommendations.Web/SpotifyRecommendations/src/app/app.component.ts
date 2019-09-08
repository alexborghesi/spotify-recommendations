import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchArtistResponse, Artist } from './models/searchArtistResponse.model';
import { Recommendation } from './models/recommendation.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpotifyRecommendations';
  name: string;
  @Input() artists: SearchArtistResponse;
  @Input() recommendation: Recommendation;
  @Input() artistsForRecommendation: Artist[];

  @Output() searchArtistOutput = new EventEmitter<string>();
  @Output() addToRecommendationOutput = new EventEmitter<Artist>();
  @Output() removeFromRecommendationOutput = new EventEmitter<Artist>();
  @Output() getRecommendationOutput = new EventEmitter<string[]>();

  constructor() { }

  search() { 
    this.searchArtistOutput.emit(this.name);
  }
  addToRecommendation(artist: Artist) {
    this.addToRecommendationOutput.emit(artist);
  }
  removeFromRecommendation(artist: Artist) {
    this.removeFromRecommendationOutput.emit(artist);
  }
  recommendTracks(artists: Artist[]) {
    var ids = new Array<string>();
    artists.forEach(artist => {
      ids.push(artist.id);
    })
    this.getRecommendationOutput.emit(ids);
  }
}

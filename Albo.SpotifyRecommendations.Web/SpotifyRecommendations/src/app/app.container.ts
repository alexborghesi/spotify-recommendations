import { Component, OnInit } from '@angular/core';
import * as appActions from './app.actions';
import * as reducer from './app.reducer';
import { Store, select } from '@ngrx/store';
import { SearchArtistResponse, Artist } from './models/searchArtistResponse.model';
import { Observable } from 'rxjs';
import { Recommendation } from './models/recommendation.model';

@Component({
    selector: 'app-container',
    template: `
        <app-component [artists]="artists | async" [recommendation]="recommendation | async" [artistsForRecommendation]="artistsForRecommendation | async" (searchArtistOutput)="searchArtist($event)" (addToRecommendationOutput)="addToRecommendation($event)" (removeFromRecommendationOutput)="removeFromRecommendation($event)" (getRecommendationOutput)="getRecommendation($event)"></app-component>
    `,
    styleUrls: ['./app.component.css']
})
export class AppContainer implements OnInit {
    artists: Observable<SearchArtistResponse>;
    recommendation: Observable<Recommendation>;
    artistsForRecommendation: Observable<Artist[]>;
    constructor(private store: Store<reducer.AppState>) {
    }

    ngOnInit(): void {
        this.artists = this.store.pipe(select(reducer.getArtist));
        this.artistsForRecommendation = this.store.pipe(select(reducer.getArtistsForRecommendation));
        this.recommendation = this.store.pipe(select(reducer.getRecommendation)); 
    }

    searchArtist(name: string) {
        this.store.dispatch(new appActions.SearchArtistAction(name));
    }
    addToRecommendation(artist: Artist) {
        this.store.dispatch(new appActions.AddToRecommendationAction(artist));
    }
    removeFromRecommendation(artist: Artist) {
        this.store.dispatch(new appActions.RemoveFromRecommendationAction(artist));
    }
    getRecommendation(ids: string[]) {
        this.store.dispatch(new appActions.GetRecommendationAction(ids));
    }
}

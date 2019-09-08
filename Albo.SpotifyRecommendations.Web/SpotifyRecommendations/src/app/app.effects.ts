import { map, switchMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Action, State, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppService } from './app.service';
import * as appActions from './app.actions';
import * as reducer from './app.reducer';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppEffects {
  
  constructor(private actions: Actions, private appService: AppService, private store: State<reducer.AppState>) { }

  @Effect()
  searchArtist: Observable<Action> = this.actions
  .pipe(
    ofType(appActions.ActionTypes.SEARCH_ARTIST),
    switchMap((action: appActions.SearchArtistAction) => this.appService.searchArtist(action.payload).pipe(
      map(result => new appActions.SearchArtistSuccessAction(result)),
      catchError(error => of(new appActions.SearchArtistFailAction(error)))))
  );

  @Effect()
  getRecommendation: Observable<Action> = this.actions
  .pipe(
    ofType(appActions.ActionTypes.GET_RECOMMENDATION),
    switchMap((action: appActions.GetRecommendationAction) => this.appService.getRecommendation(action.payload).pipe(
      map(result => new appActions.GetRecommendationSuccessAction(result)),
      catchError(error => of(new appActions.GetRecommendationFailAction(error)))))
  );
}
import { Action } from '@ngrx/store';
import { SearchArtistResponse, Artist } from './models/searchArtistResponse.model';
import { Recommendation } from './models/recommendation.model';

export const ActionTypes = {
  SEARCH_ARTIST: 'SEARCH_ARTIST',
  SEARCH_ARTIST_SUCCESS: 'SEARCH_ARTIST_SUCCESS',
  SEARCH_ARTIST_FAIL: 'SEARCH_ARTIST_FAIL',

  GET_RECOMMENDATION: 'GET_RECOMMENDATION',
  GET_RECOMMENDATION_SUCCESS: 'GET_RECOMMENDATION_SUCCESS',
  GET_RECOMMENDATION_FAIL: 'GET_RECOMMENDATION_FAIL',

  ADD_TO_RECOMMENDATION: 'ADD_TO_RECOMMENDATION',
  REMOVE_FROM_RECOMMENDATION: 'ADD_FROM_RECOMMENDATION',
};

export class SearchArtistAction implements Action {
  type = ActionTypes.SEARCH_ARTIST;
  constructor(public payload: string) { }
}

export class SearchArtistSuccessAction implements Action {
  type = ActionTypes.SEARCH_ARTIST_SUCCESS;
  constructor(public payload: SearchArtistResponse) { }
}

export class SearchArtistFailAction implements Action {
  type = ActionTypes.SEARCH_ARTIST_FAIL;
  constructor(public payload: any) { }
}

export class GetRecommendationAction implements Action {
  type = ActionTypes.GET_RECOMMENDATION;
  constructor(public payload: string[]) { }
}

export class GetRecommendationSuccessAction implements Action {
  type = ActionTypes.GET_RECOMMENDATION_SUCCESS;
  constructor(public payload: Recommendation) { }
}

export class GetRecommendationFailAction implements Action {
  type = ActionTypes.GET_RECOMMENDATION_FAIL;
  constructor(public payload: any) { }
}

export class AddToRecommendationAction implements Action {
  type = ActionTypes.ADD_TO_RECOMMENDATION;
  constructor(public payload: Artist) { }
}

export class RemoveFromRecommendationAction implements Action {
  type = ActionTypes.REMOVE_FROM_RECOMMENDATION;
  constructor(public payload: Artist) { }
}

export type Actions
  = SearchArtistAction
  | SearchArtistSuccessAction
  | SearchArtistFailAction
  | GetRecommendationAction
  | GetRecommendationSuccessAction
  | GetRecommendationFailAction
  | AddToRecommendationAction
  | RemoveFromRecommendationAction
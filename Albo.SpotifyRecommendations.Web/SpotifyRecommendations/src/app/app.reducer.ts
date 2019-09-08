import { ActionReducerMap, MetaReducer, ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { environment } from '../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromApp from './reducers/application.reducer';
import { storeFreeze } from 'ngrx-store-freeze';

/* According to the docs this custom serializer is good: https://github.com/ngrx/platform/blob/v4.1.1/docs/router-store/api.md#custom-router-state-serializer */
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface AppState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  app: fromApp.State; 
}

export class CustomRouterStateSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    // Only return an object including the URL and query params
    // instead of the entire snapshot
    return { url, queryParams };
  }
}

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: fromRouter.routerReducer,
  app: fromApp.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {

      return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger,storeFreeze]
    : [logger];


export const selectAppFeatureState = createFeatureSelector<AppState, fromApp.State>('app');

export const selectAppState = createSelector(selectAppFeatureState, state => state);
export const getArtist = createSelector(selectAppState, state => state.artist);
export const getSearchingArtist = createSelector(selectAppState, state => state.searchingArtist);
export const getRecommendation = createSelector(selectAppState, state => state.recommendation);
export const getFetchingRecommendation = createSelector(selectAppState, state => state.fetchingRecommendation);
export const getArtistsForRecommendation = createSelector(selectAppState, state => state.artistsForRecommendation);


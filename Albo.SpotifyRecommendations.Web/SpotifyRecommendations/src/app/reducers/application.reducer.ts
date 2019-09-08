import * as appActions from '../app.actions';
import { SearchArtistResponse, Artist } from '../models/searchArtistResponse.model';
import { Recommendation } from '../models/recommendation.model';

export interface State {
    artist: SearchArtistResponse;
    searchingArtist: boolean;
    recommendation: Recommendation;
    fetchingRecommendation: boolean;
    artistsForRecommendation: Artist[];
}

const initialState: State = {
    artist: null,
    searchingArtist: false,
    recommendation: null,
    fetchingRecommendation: false,
    artistsForRecommendation: null
};

export function reducer(state = initialState, action: appActions.Actions): State {
    switch (action.type) {

        case appActions.ActionTypes.SEARCH_ARTIST: {
            return Object.assign({}, state, {
                searchingArtist: true,
                recommendation: null,
            });
        }

        case appActions.ActionTypes.SEARCH_ARTIST_SUCCESS: {
            const payload = action.payload;
            return Object.assign({}, state, {
                artist: payload,
                searchingArtist: false
            });
        }

        case appActions.ActionTypes.SEARCH_ARTIST_FAIL: {
            const payload = action.payload;
            return Object.assign({}, state, {
                searchingArtist: false
            });
        }

        case appActions.ActionTypes.GET_RECOMMENDATION: {
            return Object.assign({}, state, {
                fetchingRecommendation: true
            });
        }

        case appActions.ActionTypes.GET_RECOMMENDATION_SUCCESS: {
            const payload = action.payload;
            return Object.assign({}, state, {
                recommendation: payload,
                fetchingRecommendation: false
            });
        }

        case appActions.ActionTypes.GET_RECOMMENDATION_FAIL: {
            const payload = action.payload;
            return Object.assign({}, state, {
                fetchingRecommendation: false
            });
        }
        case appActions.ActionTypes.ADD_TO_RECOMMENDATION: {
            const payload: Artist = action.payload;
            var listOfartists = new Array<Artist>();

            if (state.artistsForRecommendation != null) {
                state.artistsForRecommendation.forEach(artist => {
                    if (artist.id != payload.id) {
                        listOfartists.push(artist);
                    }
                })
            }
            if (listOfartists.length != 5) {
                listOfartists.push(payload);
            }

            return Object.assign({}, state, {
                artistsForRecommendation: listOfartists
            });
        }
        case appActions.ActionTypes.REMOVE_FROM_RECOMMENDATION: {
            const payload: Artist = action.payload;
            return Object.assign({}, state, {
                artistsForRecommendation: state.artistsForRecommendation.filter(artist => artist.id != payload.id)
            });
        }

        default: {
            return state;
        }
    }
}

export const getArtist = (state: State) => state.artist;
export const getSearchingArtist = (state: State) => state.searchingArtist;
export const getRecommendation = (state: State) => state.recommendation;
export const getFetchingRecommendation = (state: State) => state.fetchingRecommendation;
export const getArtistsForRecommendation = (state: State) => state.artistsForRecommendation;

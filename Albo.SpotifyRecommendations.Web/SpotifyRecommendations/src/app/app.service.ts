import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchArtistResponse } from './models/searchArtistResponse.model';
import { map } from 'rxjs/operators';
import { Recommendation } from './models/recommendation.model';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    searchArtist(name: string): Observable<SearchArtistResponse> {
        return this.http.get<any>(`https://localhost:5001/api/artists/${name}`).pipe(map(res => res.result));
    } 
    getRecommendation(artistIds: string[]): Observable<Recommendation> {
        return this.http.get<any>(`https://localhost:5001/api/recommendations/?ids=${artistIds}`).pipe(map(res => res.result));
    }   
}
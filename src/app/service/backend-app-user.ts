import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { TweetModel } from '../models/tweet-model';

@Injectable({
  providedIn: 'root'
})
export class BackendAppUser {

  constructor(private http: HttpClient) { }

  getAppUserByID(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(environment.pathToBackend + '/user/' + id);
  }

  getCreatedTweetsByAppUserID(id: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(environment.pathToBackend + '/user/' + id + '/tweet?status=CREATED');
  }

  getLikedTweetsByAppUserID(id: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(environment.pathToBackend + '/user/' + id + '/tweet?status=LIKED');
  }

  getDislikedTweetsByAppUserID(id: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(environment.pathToBackend + '/user/' + id + '/tweet?status=DISLIKED');
  }
}

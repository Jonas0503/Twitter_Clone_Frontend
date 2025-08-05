import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { TweetModel } from '../models/tweet-model';
import { BackendAppUser } from './backend-app-user';

@Injectable({
  providedIn: 'root'
})
export class BackendTweet {

  constructor(private http: HttpClient, private backendAppUser: BackendAppUser) { }

  getTweetByID(id: string): Observable<TweetModel> {
    return this.http.get<TweetModel>(environment.pathToBackend + '/tweet/' + id);
  }

  likeTweet(tweetId: string, userId: string): Observable<Object> {
    return this.http.patch<Object>(environment.pathToBackend + '/tweet/' + tweetId + '/user/' + userId + '?action=LIKE', null); 
  }

  dislikeTweet(tweetId: string, userId: string): Observable<Object> {
    return this.http.patch<Object>(environment.pathToBackend + '/tweet/' + tweetId + '/user/' + userId + '?action=DISLIKE', null); 
  }
}

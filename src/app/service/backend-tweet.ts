import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { TweetModel } from '../models/tweet-model';
import { AppUser } from '../models/app-user';
import { BackendAppUser } from './backend-app-user';

@Injectable({
  providedIn: 'root'
})
export class BackendTweet {

  constructor(private http: HttpClient, private backendAppUser: BackendAppUser) { }

  getTweetByID(id: string): Observable<TweetModel> {
    return this.http.get<TweetModel>(environment.pathToBackend + '/tweet/' + id);
  }
}

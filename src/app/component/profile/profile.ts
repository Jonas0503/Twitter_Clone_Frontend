import { Component, OnInit } from '@angular/core';
import { BackendAppUser } from '../../service/backend-app-user';
import { AppUser } from '../../models/app-user';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TweetModel } from '../../models/tweet-model';
import { Tweet } from '../tweet/tweet';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe, Tweet, MatButtonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

  appUser$!: Observable<AppUser>;
  createdTweets$!: Observable<TweetModel[]>;
  buttonPostsDisabled = true;
  buttonLikedDisabled = false;
  buttonDislikedDisabled = false;

  constructor(private backendAppUser: BackendAppUser) { }

  ngOnInit() {
    this.getAppUser("e29ed520-3728-4f0a-aa56-08455bf269a5");
    this.getCreatedTweetsByAppUserID("e29ed520-3728-4f0a-aa56-08455bf269a5");
  }

  getAppUser(id: string) {
    this.appUser$ = this.backendAppUser.getAppUserByID(id);
  }

  getCreatedTweetsByAppUserID(id: string) {
    this.buttonPostsDisabled = true;
    this.buttonLikedDisabled = false;
    this.buttonDislikedDisabled = false;

    this.createdTweets$ = this.backendAppUser.getCreatedTweetsByAppUserID(id);
  }

  getLikedTweetsByAppUserID(id: string) {
    this.buttonPostsDisabled = false;
    this.buttonLikedDisabled = true;
    this.buttonDislikedDisabled = false;

    this.createdTweets$ = this.backendAppUser.getLikedTweetsByAppUserID(id);
  }

  getDislikedTweetsByAppUserID(id: string) {
    this.buttonPostsDisabled = false;
    this.buttonLikedDisabled = false;
    this.buttonDislikedDisabled = true;

    this.createdTweets$ = this.backendAppUser.getDislikedTweetsByAppUserID(id);
  }
}

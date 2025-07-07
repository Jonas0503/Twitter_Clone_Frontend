import { Component, OnInit } from '@angular/core';
import { concatMap, map} from 'rxjs';
import { BackendTweet } from '../../service/backend-tweet';
import { TweetModel } from '../../models/tweet-model';
import { AppUser } from '../../models/app-user';
import { BackendAppUser } from '../../service/backend-app-user';

@Component({
  selector: 'app-tweet',
  imports: [],
  templateUrl: './tweet.html',
  styleUrl: './tweet.css'
})
export class Tweet implements OnInit {

  tweet!: TweetModel;
  creator!: AppUser;

  constructor(private backendTweet: BackendTweet, private backendAppUser: BackendAppUser) { }

  ngOnInit() {
    this.getTweetAndItsCreator('9f3a4cbd-a0f5-4047-8cee-060304c941e3');
  }

  getTweetAndItsCreator(id: string) {
    this.backendTweet.getTweetByID(id).pipe(
      concatMap(tweet =>
        this.backendAppUser.getAppUserByID(tweet.creatorID).pipe(
          map(appUser => ({tweet, appUser}))
        )
      )
    ).subscribe(({tweet, appUser}) => {
      this.tweet = tweet;
      this.creator = appUser;
    });
  }
}

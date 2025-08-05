import { Component, Input, OnInit } from '@angular/core';
import { concatMap, map} from 'rxjs';
import { BackendTweet } from '../../service/backend-tweet';
import { TweetModel } from '../../models/tweet-model';
import { AppUser } from '../../models/app-user';
import { BackendAppUser } from '../../service/backend-app-user';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tweet',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './tweet.html',
  styleUrl: './tweet.scss'
})
export class Tweet implements OnInit {

  tweet!: TweetModel;
  creator!: AppUser;
  @Input() fromProfile = false;
  @Input() tweetFromProfile!: TweetModel;
  @Input() tweetCreatorFromProfile!: AppUser;

  constructor(private backendTweet: BackendTweet, private backendAppUser: BackendAppUser) { }

  ngOnInit() {
    if (this.fromProfile) {
      this.tweet = this.tweetFromProfile;
      this.creator = this.tweetCreatorFromProfile;
    }
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

  likeTweet(tweetId: string, userId: string) {
    this.backendTweet.likeTweet(tweetId, userId).subscribe();
  }

  dislikeTweet(tweetId: string, userId: string) {
    this.backendTweet.dislikeTweet(tweetId, userId).subscribe();
  }
}

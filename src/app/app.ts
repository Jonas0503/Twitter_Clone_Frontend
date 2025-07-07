import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./component/profile/profile";
import { Tweet } from "./component/tweet/tweet";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Tweet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'twitter_clone';
}

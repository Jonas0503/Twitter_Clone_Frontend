import { Component } from '@angular/core';
import { Profile } from "./component/profile/profile";

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'twitter_clone';
}

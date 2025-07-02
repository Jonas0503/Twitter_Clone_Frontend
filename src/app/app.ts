import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'twitter_clone';
}

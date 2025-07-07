import { Component, OnInit } from '@angular/core';
import { BackendAppUser } from '../../service/backend-app-user';
import { AppUser } from '../../models/app-user';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  appUser$!: Observable<AppUser>;

  constructor(private backendAppUser: BackendAppUser) { }

  ngOnInit() {
    this.getAppUser("e7b18eed-a7e0-45ea-9b4b-42554cde6b36");
  }

  getAppUser(id: string) {
    this.appUser$ = this.backendAppUser.getAppUserByID(id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser } from './models/app-user';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAppUser {

  constructor(private http: HttpClient) { }

  getAppUserByID(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(environment.pathToBackend + '/user/' + id);
  }
}

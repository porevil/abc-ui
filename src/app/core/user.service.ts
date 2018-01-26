import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userProfile: string;

  constructor() { }

  setUserProfile(username: string): void {
    this.userProfile = username;
    sessionStorage.setItem('userProfile',this.userProfile);
  }

  getUserProfile(): any {
    return sessionStorage.getItem('userProfile');
  }

}

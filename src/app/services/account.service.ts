import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  constructor(private _router:Router) {}

  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == 'admin' && user.password == '123456') {
      this.loggedIn = true;

      localStorage.setItem('isLogged', user.userName);
      this._router.navigate(['/products']);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor(
    private router: Router
  ) { }

  authenticate(username, password) {
    console.log(this.isUserLoggedIn())
    if (username === "user123" && password === "pass") {
      sessionStorage.setItem('authenticaterUser', username)
      console.log(this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    this.router.navigate(['login'])
  }
}

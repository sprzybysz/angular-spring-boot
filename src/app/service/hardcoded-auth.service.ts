import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password) {
    if (username === "user123" && password === "pass") {
      return true;
    }
    return false;
  }
}

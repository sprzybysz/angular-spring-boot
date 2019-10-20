import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user123'
  password = '' 
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router,
    private HardcodedAuthService: HardcodedAuthService ) { }

  ngOnInit() {
  }
  
  handleLogin() {
    if (this.HardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}

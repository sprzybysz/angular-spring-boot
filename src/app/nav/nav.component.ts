import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //isUserLoggedIn: boolean = false

  constructor(private hardcodedAuth: HardcodedAuthService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuth.isUserLoggedIn();
  }

}

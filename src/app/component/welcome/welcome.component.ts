import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
    this.test();
  }

  test(){
    if(!this.keycloakService.isTokenExpired()){
      this.router.navigate(['/overview']);
    }
  }

  login(): void {
    this.keycloakService.login();
    this.router.navigate(['/overview']);
  }

  register(): void {
    this.keycloakService.register();
    this.router.navigate(['/overview']);
  }

}

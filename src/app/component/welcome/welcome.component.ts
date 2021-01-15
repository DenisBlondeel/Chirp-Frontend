import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(){
    if(!this.keycloakService.isTokenExpired()){
      this.router.navigate(['/overview']);
    }
  }

  login(): void {
    this.keycloakService.login();
    this.router.navigate(['/overview']);
    console.log("loggedin")
  }

  register(): void {
    //this.keycloakService.register({loginHint: 'register'});
    //this.router.navigate(['http://localhost:8080/auth/realms/chirp/protocol/openid-connect/registrations?client_id=chirp-web&response_type=code&scope=openid%20email&redirect_uri=http://localhost:4200/profile&kc_locale=EN']);
    console.log("registered")
  }

}

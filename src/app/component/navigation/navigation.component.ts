import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';   

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private keycloakService : KeycloakService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

}

import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { User } from 'src/app/model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.makeUser()
  }
    
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50; 

  async makeUser() {
    if (await this.keycloakService.isLoggedIn) {
      let user: User = { firstName: await this.getFirstName(), lastName: await this.getLastName() }
      console.log("yay")
      this.userService.addUser(user).subscribe((val) => {
      this.router.navigate(['/overview']);
      },
        error => {
          this.router.navigate(['/overview']);
          console.log("err");
        },
        () => {
          console.log("callback");
        })
    }
  }

  async getFirstName() {
    return (await this.keycloakService.loadUserProfile()).firstName;
  }

  async getLastName() {
    return (await this.keycloakService.loadUserProfile()).lastName;
  }

}

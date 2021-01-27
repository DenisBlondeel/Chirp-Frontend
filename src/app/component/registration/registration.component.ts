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
    if (this.keycloakService.getUserRoles().indexOf("new_user") > -1) {
      this.makeUser();
    }
    else {
      this.router.navigate(['/overview']);
    }

  }

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  async makeUser() {
    if (await this.keycloakService.isLoggedIn) {
      let kcid = await this.getKcId();
      let user: User = { firstName: await this.getFirstName(), lastName: await this.getLastName(), username: await this.getUsername(), email: await this.getMail(), kcId: kcid };
      this.userService.addUser(user).subscribe((val) => {
      },
        error => {
          this.router.navigate(['']);
          console.log("err");
        },
        () => {
          this.userService.addRole(kcid, "user").subscribe((val) => {
            this.userService.deleteRole(kcid, "new_user").subscribe((val) => {
              this.router.navigate(['/overview']);
            },
              err => { },
              () => { })
          },
            err => { },
            () => { })
        })
    }
  }

  async getFirstName() {
    return (await this.keycloakService.loadUserProfile()).firstName;
  }

  async getLastName() {
    return (await this.keycloakService.loadUserProfile()).lastName;
  }

  async getUsername() {
    return (await this.keycloakService.loadUserProfile()).username;
  }

  async getMail() {
    return (await this.keycloakService.loadUserProfile()).email;
  }

  async getKcId() {
    return await this.keycloakService.getKeycloakInstance().subject
  }

}

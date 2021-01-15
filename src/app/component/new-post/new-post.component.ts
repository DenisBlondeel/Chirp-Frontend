import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormGroupDirective } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { Post } from '../../model/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  @Output() postEvent = new EventEmitter<Post>();


  postForm: FormGroup;

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit() {
    if (this.postForm.errors) {
    }

    let post: Post = {
      content: this.postForm.value.postContent,
      user: { firstName: await this.getFirstName(), lastName: await this.getLastName(), kcId: await this.keycloakService.getKeycloakInstance().subject, email: "",  username: "denis" }
    }

    this.postEvent.emit(post)
    setTimeout(() =>
      this.formGroupDirective.resetForm(), 0)
  }

  private initForm() {
    this.postForm = new FormGroup({
      'postContent': new FormControl(null, Validators.required)
    })

  }

   async getFirstName(){
   return (await this.keycloakService.loadUserProfile()).firstName;
  }

  async getLastName(){
    return (await this.keycloakService.loadUserProfile()).lastName;
   }



}

import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService : PostsService, private keycloakService : KeycloakService) { }

  ngOnInit(): void {
    this.getPosts();
    console.log(this.keycloakService.getUsername());
  }

  getPosts() {
    this.posts = this.postsService.getMockdata();
  }

  addPost(newPost: Post){
    this.posts.unshift(newPost);
    this.postsService.addPost(newPost);
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getAllPosts().subscribe(
      (result) => {this.posts = result}
    );
  }

  addPost(newPost: Post){
     this.postsService.addPost(newPost).subscribe(
       (val) => {
        console.log("success")
        this.posts.unshift(newPost);
       },
       error => {
        console.log("err");
       },
       () => {
         console.log("callback");
       }
     )
      
  }

}

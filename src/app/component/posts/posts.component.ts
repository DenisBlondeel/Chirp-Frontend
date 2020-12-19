import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostsService } from '../../service/posts.service';

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
    this.posts = this.postsService.getMockdata();
  }

  addPost(newPost: Post){
    this.posts.unshift(newPost);
    this.postsService.addPost(newPost);
  }

}

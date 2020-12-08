import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { MOCKDATA } from '../mock';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getMockdata() : Post[]{
    return MOCKDATA;
  }

  addPost(newPost: Post){
    
  }
}

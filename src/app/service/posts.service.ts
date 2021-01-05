import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private posts: Post[]
  private success: boolean = false;

  private httpPostCall: string = 'http://localhost:9090/post'


  getAllPosts(): Observable<Post[]> {

    return this.http.get<Post[]>(this.httpPostCall)
  }

    addPost(newPost: Post): Observable<any> {
      console.log(newPost)
    return this.http.post(this.httpPostCall, newPost)
  }
}

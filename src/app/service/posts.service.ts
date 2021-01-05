import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private httpGetCall : string = 'http://localhost:9090/post' 

  getAllPosts() : Observable<Post[]>{

    return this.http.get<Post[]>(this.httpGetCall)
  }

  addPost(newPost: Post){
    this.http.post(this.httpGetCall, newPost)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}

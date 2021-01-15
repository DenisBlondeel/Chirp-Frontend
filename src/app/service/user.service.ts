import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpUserCall: string = "http://localhost:9090/user"

  constructor(private http: HttpClient) { }

  addUser(newUser: User): Observable<any>{
    return this.http.post(this.httpUserCall, newUser)
  }


}

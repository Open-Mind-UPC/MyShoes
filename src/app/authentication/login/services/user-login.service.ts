import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError, map} from "rxjs";
import {User} from "../../../shared/model/user";

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  basePath = 'http://localhost:3000/api/v1/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    const url = `${this.basePath}?email=${email}&password=${password}`;
    return this.http.get<User[]>(url, this.httpOptions)
      .pipe(
        map((users: User[]) => this.findMatchingUser(users, email, password)),
        catchError(this.handleError)
      );
  }

  private findMatchingUser(users: User[], email: string, password: string): User | undefined {
    return users.find(user => user.email === email && user.password === password);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with the request, please try again later.');
  }
}

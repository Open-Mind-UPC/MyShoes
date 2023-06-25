import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError, map} from "rxjs";
import {User} from "../../../shared/model/user";

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {
  basePath = 'http://localhost:3000/api/v1/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http:HttpClient) { }

  //
  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() =>
      new Error('Something happened with request, please try again later'));
  }

  //post
  registerUser(user: User) {
    return this.http.post<User>(this.basePath, JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  checkExistingEmail(email: string) {
    const url = `${this.basePath}?email=${email}`;
    return this.http.get<User[]>(url, this.httpOptions)
      .pipe(
        map((users: User[]) => users.length > 0),
        catchError(this.handleError)
      );
  }
}

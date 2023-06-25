import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
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
  registerUser(item: User){
    return this.http.post<User>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

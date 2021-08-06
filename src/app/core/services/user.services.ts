import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { User } from "../models/user";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({

  providedIn: 'root'

})

export class UserService {

  private userBasePath = '/api/users/'

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getUser(userName: String): Observable<User> {

      return this.http.get<User>(this.userBasePath + userName).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
      );
  }

//   getProducts(): Observable<User[]> {
//     return this.http.get<User[]>(this.productBaseUrl).pipe(
//         tap(data => console.log('All', JSON.stringify(data))),
//         catchError(this.handleError)
//     );
// }
  handleError(err: HttpErrorResponse) {

      let errorMessage = '';

      if (err.error) {
          errorMessage = `An error occurred: ${err.error}, status: ${err.status} `;
      } else {
          errorMessage = `Non è stato possibile recuperare le info dell'utente: ${err.status}, error: ${err.message}`;
      }

      //alert(errorMessage);
      //this.toastr.error(errorMessage)
      return throwError(errorMessage);

  }

}


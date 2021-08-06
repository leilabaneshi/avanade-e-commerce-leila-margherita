import { Injectable } from "@angular/core";
import { Product } from "../models/product";

import { Observable, Subject, throwError } from "rxjs";

import { tap, catchError } from "rxjs/operators";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({

  providedIn: 'root'

})

export class ProductService {
  private productBaseUrl = 'api/products/product'
  private subject = new Subject<any>();

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productBaseUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message} `;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }



    sendNumber(number:number){
      this.subject.next({text:number});
    }

    getNumber():Observable<any>{
      return this.subject.asObservable();
    }

 }

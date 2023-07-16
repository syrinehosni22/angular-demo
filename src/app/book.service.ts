import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { Book } from './book';
     
@Injectable({
  providedIn: 'root'
})
export class BookService {
     
  private apiURL = "https://jsonplaceholder.typicode.com";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll() {

    return this.httpClient.get(this.apiURL + '/Books/')

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(Book:Book) {

    return this.httpClient.post(this.apiURL + '/Books/', JSON.stringify(Book), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number) {

    return this.httpClient.get(this.apiURL + '/Books/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, Book:Book) {

    return this.httpClient.put(this.apiURL + '/Books/' + id, JSON.stringify(Book), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/Books/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
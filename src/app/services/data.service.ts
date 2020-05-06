import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { throwError , Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getSearchResults(Query: string): Observable<Page[]> {
    const options = Query ?
     { params: new HttpParams().set('Query', Query) } : {};

    return this.http.get<Page[]>('api/serachResults', options)
      .pipe(
        catchError(this.handleError) // code 401 -> Unauthorized access.
      );
  }


  // use retry func
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

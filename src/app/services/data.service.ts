import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { throwError , Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Page } from '../models/page';
import { Trend } from '../models/trend';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  base: String = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getSearchResults(Query: string): Observable<Page[]> {
    const options = Query ?
     { params: new HttpParams().set('Query', Query) } : {};

    return this.http.get<Page[]>('api/serachResults', options)
      .pipe(
        catchError(this.handleError) // code 401 -> Unauthorized access.
      );
  }

  getAutoComplete(search: string): Observable<String[]>{
    const options = search ?
     { params: new HttpParams().set('searchString', search) } : {};
     return this.http.get<String[]>(this.base + 'Suggestions?query='+search).pipe(catchError(this.handleError));
  }

  getTrends(country: string): Observable<Trend[]>{
    const options = country ?
     { params: new HttpParams().set('country', country) } : {};
     return this.http.get<Trend[]>(this.base + 'Trends?country='+country).pipe(catchError(this.handleError));
  }

  getPages(query: string, userLocation: string, pageNumber: string): Observable<Page[]> {
    const parametersSent = 
     { params: new HttpParams().set('query', query)
                              .append('country', userLocation)
                              .append('pageNumber', pageNumber) };
     return this.http.get<Page[]>(this.base + 'Pages', parametersSent).pipe(catchError(this.handleError));
  }

  getImages(query: string, userLocation: string, pageNumber: string): Observable<Image[]> { 
    const parametersSent = 
    { params: new HttpParams().set('query', query)
                             .append('country', userLocation)
                             .append('pageNumber', pageNumber) };
     return this.http.get<Image[]>(this.base + 'Images', parametersSent).pipe(catchError(this.handleError));
  }

  postVisitedUrl(url: string, query: string): Observable<any> {
    const parametersSent = 
    { params: new HttpParams().set('query', query) };
    return this.http.post<any>(this.base + 'VisitedUrls?query='+query+'&visitedUrl='+url,"").pipe(
      map(res => res),
      catchError(this.handleError)
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

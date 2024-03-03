import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  private apiUrl = 'https://localhost:6999'; // Replace with your API URL
  private headers = new HttpHeaders({
    // 'Content-Type': 'text/plain',
    // 'Authorization': 'Bearer YourAccessToken',
    // 'Access-Control-Allow-Origin': 'http://localhost:4200',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization' // Include any authentication token if needed
  });

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error && error.error && error.error) {
      // The response denotes success but contains error details
      // const errorResponse = JSON.parse(error.error);
      // errorMessage = errorResponse.error || 'Unknown error occurred';
    }

    return throwError(error);
  }

  private performRequest<T>(method: string, path: string, data?: any): Observable<T> {
    const url = `${this.apiUrl}/${path}`;
    let request$: Observable<T>;

    switch (method.toLowerCase()) {
      case 'get':
        request$ = this.http.get<T>(url, { headers: this.headers });
        break;
      case 'post':
        request$ = this.http.post<T>(url, data, { headers: this.headers });
        break;
      case 'put':
        request$ = this.http.put<T>(url, data, { headers: this.headers });
        break;
      case 'delete':
        request$ = this.http.delete<T>(url, { headers: this.headers });
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    return request$.pipe(catchError(this.handleError));
  }

  public get<T>(path: string): Observable<T> {
    return this.performRequest<T>('get', path);
  }

  public post<T>(path: string, data: any): Observable<T> {
    return this.performRequest<T>('post', path, data);
  }

  public put<T>(path: string, data: any): Observable<T> {
    return this.performRequest<T>('put', path, data);
  }

  public delete<T>(path: string): Observable<T> {
    return this.performRequest<T>('delete', path);
  }
}

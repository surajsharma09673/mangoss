import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  private apiUrl = 'https://localhost:6999'; // Replace with your API URL
  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
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

  private performRequest<T>(
    method: string,
    path: string,
    data?: any,
    headers?: HttpHeaders
  ): Observable<T> {
    const url = `${this.apiUrl}/${path}`;
    let request$: Observable<T>;

    const mergedHeaders = headers
      ? this.mergeHeaders(this.defaultHeaders, headers)
      : this.defaultHeaders;

    switch (method.toLowerCase()) {
      case 'get':
        request$ = this.http.get<T>(url, { headers: mergedHeaders });
        break;
      case 'post':
        request$ = this.http.post<T>(url, data, { headers: mergedHeaders });
        break;
      case 'put':
        request$ = this.http.put<T>(url, data, { headers: mergedHeaders });
        break;
      case 'delete':
        request$ = this.http.delete<T>(url, { headers: mergedHeaders });
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    return request$.pipe(catchError(this.handleError));
  }

  private mergeHeaders(defaultHeaders: HttpHeaders, customHeaders: HttpHeaders): HttpHeaders {
    const mergedHeaders = new HttpHeaders();
    defaultHeaders.keys().forEach(key => mergedHeaders.append(key, defaultHeaders.getAll(key)!));
    customHeaders.keys().forEach(key => mergedHeaders.append(key, customHeaders.getAll(key)!));
    return mergedHeaders;
  }

  public get<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.performRequest<T>('get', path, undefined, headers);
  }

  public post<T>(path: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.performRequest<T>('post', path, data, headers);
  }

  public put<T>(path: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.performRequest<T>('put', path, data, headers);
  }

  public delete<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.performRequest<T>('delete', path, undefined, headers);
  }
}

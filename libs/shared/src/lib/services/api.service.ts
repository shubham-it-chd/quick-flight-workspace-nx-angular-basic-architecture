import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}${url}`, { headers: this.headers, params });
  }

  post<T>(url: string, data: Object = {}): Observable<T> {
    return this.http.post<T>(`${environment.api_url}${url}`, JSON.stringify(data), { headers: this.headers });
  }

  put<T>(url: string, data: Object = {}): Observable<T> {
    return this.http.put<T>(`${environment.api_url}${url}`, JSON.stringify(data), { headers: this.headers });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${environment.api_url}${url}`, { headers: this.headers });
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }
}

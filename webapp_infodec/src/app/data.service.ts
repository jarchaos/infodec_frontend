import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getQueryHistory(country_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/queries_history/${country_id}`);
  }

  postQueryHistory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save_history`, data);
  }

  getCountries():Observable<any>{
    return this.http.get(`${this.baseUrl}/get-all-countries`)
  }
}

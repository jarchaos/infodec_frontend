import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/Country.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl:string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getQueryHistory(country_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/queries_history/${country_id}`);
  }

  postQueryHistory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save_history`, data);
  }

  getCountries():Observable<Country | undefined>{
    return this.http.get<Country>(`${this.baseUrl}/get-all-countries`).pipe(
      catchError((error)=>{
        console.log(error)
        return of(undefined);
      })
    );
  }
}

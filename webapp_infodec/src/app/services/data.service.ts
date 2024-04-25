import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Country } from '../interfaces/Country.interface';
import { City } from '../interfaces/City.interface';
import { Weather } from '../interfaces/Weather.interface';
import { Exchange } from '../interfaces/Exchange.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getQueryHistory(country_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/queries_history/${country_id}`);
  }

  postQueryHistory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save_history`, data);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/get-all-countries`).pipe(
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return of([]);
      })
    );
  }

  getExchangeByCountry(country_id: number): Observable<Exchange> {
    return this.http
      .get<Exchange>(`${this.baseUrl}/currency/${country_id}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching exchange:', error);
          return throwError(() => new Error('Error fetching exchange'));
        })
      );
  }

  getCitiesByCountry(country_id: number): Observable<City> {
    return this.http
      .get<City>(`${this.baseUrl}/countries/${country_id}/cities`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching cities:', error);
          return throwError(() => new Error('Error fetching cities'));
        })
      );
  }

  getWeatherByCityName(city_name: string): Observable<Weather[]> {
    return this.http
      .get<Weather[]>(`${this.baseUrl}/weather/${city_name}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching the weather:', error);
          return of([]);
        })
      );
  }
}

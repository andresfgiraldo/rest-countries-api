import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  private URL_API: string = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.URL_API + 'all');
  }

  getByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.URL_API + 'name/' + name);
  }

  getByCode(code: string): Observable<Country> {
    return this.http.get<Country>(this.URL_API + 'alpha/' + code);
  }

  getByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.URL_API + 'region/' + region);
  }

}

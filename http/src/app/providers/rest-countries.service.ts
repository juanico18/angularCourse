import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTCountriesService {
  BASE_NAME: string = 'https://restcountries.eu/rest/v2/name/'
  constructor(private clientHttp: HttpClient) { }

  getCountry(country: string): Observable<any> {
    return this.clientHttp.get(`${this.BASE_NAME}${country}`);
  }
}

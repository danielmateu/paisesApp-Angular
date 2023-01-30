import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {Observable, of} from 'rxjs';
// import {catchError} from 'rxjs/operators';
import { Country, Region } from '../interfaces/pais.interface';
import { Capital } from '../interfaces/capital.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {}

    buscarPais(termino: string): Observable<Country[]> {

      const url = `${this.apiUrl}/name/${termino}`

      return this.http.get<Country[]>(url)

    }

    buscarCapital(termino: string): Observable<Capital[]> {
      const url = `${this.apiUrl}/capital/${termino}`

      return this.http.get<Capital[]>(url)
    }

    getPaisPorAlpha(id: string): Observable<Country>{
      const url = `${this.apiUrl}/alpha/${id}`

      return this.http.get<Country>(url)
    }

    buscarRegion(region: string): Observable<Country[]>{
      const url = `${this.apiUrl}/regionalbloc/${region}`

      return this.http.get<Country[]>(url)
    }

    // "https://restcountries.com/v3.1/regionalbloc/SAARC"


}
